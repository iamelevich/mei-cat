import { useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { invalidateMeiFiles } from "@/data/mei";
import { app } from "@/lib/app";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import {
	Dropzone,
	DropzoneContent,
	DropzoneEmptyState,
} from "./ui/shadcn-io/dropzone";

export type UploadMeiFileDialogProps = React.PropsWithChildren;

export function UploadMeiFileDialog({ children }: UploadMeiFileDialogProps) {
	const queryClient = useQueryClient();
	const [files, setFiles] = useState<File[]>([]);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const [isUploading, setIsUploading] = useState(false);

	const handleDrop = (files: File[]) => {
		setFiles(files);
	};

	const handleUpload = async () => {
		setIsUploading(true);
		try {
			const response = await app.api.mei.post({
				file: files[0],
			});
			if (response.status === 200) {
				invalidateMeiFiles(queryClient);
				toast.success("MEI file uploaded successfully");
				setFiles([]);
				closeButtonRef.current?.click();
			} else {
				const description: string | undefined =
					response.error?.value && "message" in response.error.value
						? response.error.value.message
						: undefined;
				toast.error("Failed to upload MEI file", {
					description,
				});
			}
		} finally {
			setIsUploading(false);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Upload MEI File</DialogTitle>
					<DialogDescription>
						Upload a MEI file to the database.
					</DialogDescription>
				</DialogHeader>
				<Dropzone
					accept={{ "application/xml": [".xml", ".mei"] }}
					onDrop={handleDrop}
					onError={console.error}
					src={files}
				>
					<DropzoneEmptyState />
					<DropzoneContent />
				</Dropzone>
				<DialogFooter className="sm:justify-end">
					<Button
						type="button"
						variant="default"
						disabled={files.length === 0 || isUploading}
						onClick={handleUpload}
					>
						{isUploading ? "Uploading..." : "Upload"}
					</Button>
					<Button
						type="button"
						variant="destructive"
						disabled={files.length === 0 || isUploading}
						onClick={() => setFiles([])}
					>
						Clear
					</Button>
					<DialogClose asChild>
						<Button ref={closeButtonRef} type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

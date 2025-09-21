import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useId, useRef, useState } from "react";
import { toast } from "sonner";
import * as v from "valibot";
import { invalidateMeiFiles } from "@/data/mei";
import { app } from "@/lib/app";
import { cn } from "@/lib/utils";
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
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
	Dropzone,
	DropzoneContent,
	DropzoneEmptyState,
} from "./ui/shadcn-io/dropzone";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export type UploadMeiFileDialogProps = React.PropsWithChildren;

export function UploadMeiFileDialog({ children }: UploadMeiFileDialogProps) {
	const queryClient = useQueryClient();
	const [files, setFiles] = useState<File[]>([]);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const [isUploading, setIsUploading] = useState(false);
	const [tab, setTab] = useState<"file" | "url">("file");
	const [url, setUrl] = useState<string>("");
	const [urlError, setUrlError] = useState<string | undefined>(undefined);

	const urlId = useId();

	useEffect(() => {
		const result = v.safeParse(
			v.pipe(v.string(), v.url("Should be a valid URL")),
			url,
		);
		if (result.success) {
			setUrlError(undefined);
		} else {
			setUrlError(v.summarize(result.issues));
		}
	}, [url]);

	const handleDrop = (files: File[]) => {
		setFiles(files);
	};

	const handleUpload = async () => {
		setIsUploading(true);
		try {
			if (tab === "file") {
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
			} else if (tab === "url") {
				const response = await app.api.mei.url.post({
					url,
				});
				if (response.status === 200) {
					invalidateMeiFiles(queryClient);
					toast.success("MEI file uploaded successfully");
					setUrl("");
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
			} else {
				toast.error("Something went wrong");
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
				<Tabs
					defaultValue={tab}
					className="w-full"
					value={tab}
					onValueChange={(value) => setTab(value as "file" | "url")}
				>
					<TabsList>
						<TabsTrigger value="file">File</TabsTrigger>
						<TabsTrigger value="url">URL</TabsTrigger>
					</TabsList>
					<TabsContent value="file">
						<Dropzone
							accept={{ "application/xml": [".xml", ".mei"] }}
							onDrop={handleDrop}
							onError={console.error}
							src={files}
						>
							<DropzoneEmptyState />
							<DropzoneContent />
						</Dropzone>
					</TabsContent>
					<TabsContent value="url">
						<div className="grid gap-3">
							<Label htmlFor={urlId}>URL</Label>
							<Input
								id={urlId}
								type="url"
								value={url}
								onChange={(e) => setUrl(e.target.value)}
							/>
							<p
								className={cn({
									"text-sm text-red-500": true,
									hidden: !urlError,
								})}
							>
								{urlError}
							</p>
						</div>
					</TabsContent>
				</Tabs>
				<DialogFooter className="sm:justify-end">
					<Button
						type="button"
						variant="default"
						disabled={
							(files.length === 0 && tab === "file") ||
							(tab === "url" && !url) ||
							(tab === "url" && urlError !== undefined) ||
							isUploading
						}
						onClick={handleUpload}
					>
						{isUploading ? "Uploading..." : "Upload"}
					</Button>
					<Button
						type="button"
						variant="destructive"
						disabled={
							(files.length === 0 && tab === "file") ||
							(tab === "url" && !url) ||
							isUploading
						}
						onClick={() => {
							if (tab === "file") {
								setFiles([]);
							} else {
								setUrl("");
							}
						}}
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

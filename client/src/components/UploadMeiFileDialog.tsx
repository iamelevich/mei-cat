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

export type UploadMeiFileDialogProps = React.PropsWithChildren;

export function UploadMeiFileDialog({ children }: UploadMeiFileDialogProps) {
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
				<DialogFooter className="sm:justify-end">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

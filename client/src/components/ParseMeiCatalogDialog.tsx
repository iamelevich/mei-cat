import { IconCheck, IconLoader, IconX } from "@tabler/icons-react";
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
import { ScrollArea } from "./ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export type ParseMeiCatalogDialogProps = React.PropsWithChildren;

type XmlLink = {
	link: string;
	status: "queued" | "created" | "error" | "loading";
	error: string | undefined;
};

export function ParseMeiCatalogDialog({
	children,
}: ParseMeiCatalogDialogProps) {
	const queryClient = useQueryClient();
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isImporting, setIsImporting] = useState(false);
	const [url, setUrl] = useState<string>("");
	const [urlError, setUrlError] = useState<string | undefined>(undefined);
	const [xmlLinks, setXmlLinks] = useState<XmlLink[]>([]);

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

	const importXmlLinks = async (xmlLinksToImport: XmlLink[]) => {
		toast.info(`Importing MEI catalog (${xmlLinksToImport.length} files) ...`);
		setIsImporting(true);
		try {
			for (const link of xmlLinksToImport) {
				if (link.status !== "queued") continue;
				setXmlLinks((oldXmlLinks) => {
					const linkIndex = oldXmlLinks.findIndex((l) => l.link === link.link);
					if (linkIndex === -1)
						return [...oldXmlLinks, { ...link, status: "loading" }];
					return [
						...oldXmlLinks.slice(0, linkIndex),
						{ ...link, status: "loading" },
						...oldXmlLinks.slice(linkIndex + 1),
					];
				});
				const response = await app.api.mei.url.post({
					url: link.link,
				});
				if (response.status === 200) {
					setXmlLinks((oldXmlLinks) => {
						const linkIndex = oldXmlLinks.findIndex(
							(l) => l.link === link.link,
						);
						if (linkIndex === -1) return oldXmlLinks;
						return [
							...oldXmlLinks.slice(0, linkIndex),
							{ ...link, status: "created" },
							...oldXmlLinks.slice(linkIndex + 1),
						];
					});
				} else {
					const errorMessage =
						response.error?.value && "message" in response.error.value
							? response.error.value.message
							: "Failed to import MEI file";
					setXmlLinks((oldXmlLinks) => {
						const linkIndex = oldXmlLinks.findIndex(
							(l) => l.link === link.link,
						);
						if (linkIndex === -1) return oldXmlLinks;
						return [
							...oldXmlLinks.slice(0, linkIndex),
							{ ...link, status: "error", error: errorMessage },
							...oldXmlLinks.slice(linkIndex + 1),
						];
					});
				}
			}
		} finally {
			setIsImporting(false);
		}
	};

	const handleParse = async () => {
		setIsLoading(true);
		setXmlLinks([]);
		try {
			const response = await app.api.mei["parse-catalog"].post({
				url,
				// itemsPerPage: 10,
			});
			if (response.status === 200 && response.data !== null) {
				toast.success("MEI catalog parsed successfully.");
				const newXmlLinks: XmlLink[] = response.data.xmlUrls.map((link) => ({
					link,
					status: "queued",
					error: undefined,
				}));
				setXmlLinks(newXmlLinks);
				await importXmlLinks(newXmlLinks);
				invalidateMeiFiles(queryClient);
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
			setIsLoading(false);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Parse MEI Catalog</DialogTitle>
					<DialogDescription>Parse a MEI catalog from a URL.</DialogDescription>
				</DialogHeader>
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
					<p className="text-xs text-muted-foreground">
						URL must end with /index.xq. Example:
						https://www.kb.dk/dcm/schw/index.xq
					</p>
				</div>
				<ScrollArea
					className={cn("h-[200px] w-full rounded-md border p-4", {
						"bg-muted": xmlLinks.length === 0,
					})}
				>
					{xmlLinks.map((link) => (
						<div
							key={link.link}
							className={cn("text-sm p-2 border-b flex justify-between", {
								"text-red-500": link.status === "error",
								"text-green-500": link.status === "created",
								"text-yellow-500": link.status === "loading",
								"bg-muted text-muted-foreground": link.status === "queued",
							})}
						>
							{link.link.split("/").pop()}
							{link.status === "created" && <IconCheck />}
							{link.status === "loading" && (
								<IconLoader className="animate-spin" />
							)}
							{link.status === "error" && (
								<Tooltip>
									<TooltipTrigger>
										<IconX />
									</TooltipTrigger>
									<TooltipContent>{link.error}</TooltipContent>
								</Tooltip>
							)}
							{link.status === "queued" && <p>Queued</p>}
						</div>
					))}
					{xmlLinks.length === 0 && !isLoading && (
						<p className="text-sm text-muted-foreground">
							No XML links found. Do parsing to see results.
						</p>
					)}
					{isLoading && !isImporting && (
						<p className="text-sm text-muted-foreground">Parsing...</p>
					)}
				</ScrollArea>
				<DialogFooter className="sm:justify-end">
					{!isImporting && (
						<>
							<Button
								type="button"
								variant="default"
								disabled={!url || urlError !== undefined || isLoading}
								onClick={handleParse}
							>
								{isLoading ? "Parsing..." : "Parse"}
							</Button>
							<Button
								type="button"
								variant="destructive"
								disabled={!url || isLoading}
								onClick={() => {
									setUrl("");
								}}
							>
								Clear
							</Button>
						</>
					)}
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

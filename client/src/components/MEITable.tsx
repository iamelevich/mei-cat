import type { UniqueIdentifier } from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
	IconChevronDown,
	IconChevronLeft,
	IconChevronRight,
	IconChevronsLeft,
	IconChevronsRight,
	IconDotsVertical,
	IconDownload,
	IconLayoutColumns,
	IconRefresh,
	IconTrash,
	IconUpload,
} from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import {
	type ColumnDef,
	type ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type Row,
	type SortingState,
	useReactTable,
	type VisibilityState,
} from "@tanstack/react-table";
import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { invalidateMeiFiles, type MeiFile, useMeiFiles } from "@/data/mei";
import { app } from "@/lib/app";
import { saveAsXML } from "@/lib/file-utils";
import { UploadMeiFileDialog } from "./UploadMeiFileDialog";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./ui/alert-dialog";

const columns: ColumnDef<MeiFile>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Select all"
				/>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "title",
		header: "Title",
		cell: ({ row }) => {
			const titles = row.original.title;
			const primaryTitle = titles.find((t) => !t.language) || titles[0];
			return (
				<div className="flex flex-col">
					<span className="font-medium text-wrap">
						{primaryTitle?.title || "Untitled"}
					</span>
					{titles.length > 1 && (
						<span className="text-xs text-muted-foreground">
							+{titles.length - 1} more
						</span>
					)}
				</div>
			);
		},
		enableHiding: false,
	},
	{
		accessorKey: "createdAt",
		header: "Created",
		cell: ({ row }) => (
			<div className="text-sm text-muted-foreground">
				{row.original.createdAt.toLocaleDateString()}
			</div>
		),
	},
	{
		accessorKey: "updatedAt",
		header: "Updated",
		cell: ({ row }) => (
			<div className="text-sm text-muted-foreground">
				{row.original.updatedAt.toLocaleDateString()}
			</div>
		),
	},
	{
		id: "actions",
		header: () => <div className="w-full text-right">Actions</div>,
		cell: ({ row }) => {
			const queryClient = useQueryClient();
			return (
				<div className="flex items-center justify-end gap-2">
					<AlertDialog>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
									size="icon"
								>
									<IconDotsVertical />
									<span className="sr-only">Open menu</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-32">
								<DropdownMenuItem>View Details</DropdownMenuItem>
								<DropdownMenuItem>Edit</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									onClick={async () => {
										try {
											const response = await app.api
												.mei({
													id: row.original.id,
												})
												.original.get();
											if (response.data) {
												// Create download link
												saveAsXML(
													response.data,
													`${row.original.title[0].title}_original.xml`,
												);
												toast.success("Original file downloaded");
											}
										} catch (error) {
											toast.error("Failed to download original file");
											console.error(error);
										}
									}}
								>
									<IconDownload /> Original
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={async () => {
										try {
											const response = await app.api
												.mei({
													id: row.original.id,
												})
												.converted.get();
											if (response.data) {
												// Create download link
												saveAsXML(
													response.data,
													`${row.original.title[0].title}_converted.mei51.xml`,
												);
												toast.success("Converted file downloaded");
											}
										} catch (error) {
											toast.error("Failed to download converted file");
											console.error(error);
										}
									}}
								>
									<IconDownload /> Converted
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem
									onClick={async () => {
										try {
											const response = await app.api.mei
												.reimport({
													id: row.original.id,
												})
												.post();
											if (response.status === 200) {
												toast.success("MEI file reimported successfully");
												invalidateMeiFiles(queryClient);
											} else {
												toast.error("Failed to reimport MEI file");
											}
										} catch (error) {
											toast.error("Failed to reimport MEI file");
											console.error(error);
										}
									}}
								>
									<IconRefresh /> Reimport
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<AlertDialogTrigger asChild>
									<DropdownMenuItem variant="destructive">
										<IconTrash /> Delete
									</DropdownMenuItem>
								</AlertDialogTrigger>
							</DropdownMenuContent>
						</DropdownMenu>
						{/* Delete MEI file dialog */}
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Are really want to delete this MEI file?
								</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will permanently delete the
									MEI file and remove it from our servers.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction
									variant="destructive"
									onClick={async () => {
										try {
											const response = await app.api
												.mei({ id: row.original.id })
												.delete();
											if (response.status === 200) {
												toast.success("MEI file deleted");
												invalidateMeiFiles(queryClient);
											} else {
												toast.error("Failed to delete MEI file");
											}
										} catch (error) {
											toast.error("Failed to delete MEI file");
											console.error(error);
										}
									}}
								>
									Delete
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			);
		},
	},
];

function SelectableRow({ row }: { row: Row<MeiFile> }) {
	return (
		<TableRow data-state={row.getIsSelected() && "selected"}>
			{row.getVisibleCells().map((cell) => (
				<TableCell key={cell.id}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</TableCell>
			))}
		</TableRow>
	);
}

export function MEITable() {
	const [pagination, setPagination] = React.useState({
		pageIndex: 0,
		pageSize: 10,
	});
	const { data, isLoading } = useMeiFiles({
		page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
	});
	const [rowSelection, setRowSelection] = React.useState({});
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [isBatchDeleting, setIsBatchDeleting] = React.useState(false);
	const [isBatchReimporting, setIsBatchReimporting] = React.useState(false);

	const dataIds = React.useMemo<UniqueIdentifier[]>(
		() => data?.data.map(({ id }) => id) || [],
		[data],
	);

	const table = useReactTable({
		data: data?.data || [],
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters,
			pagination,
		},
		rowCount: data?.pagination.totalCount,
		manualPagination: true,
		getRowId: (row) => row.id,
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	});

	const selectedRows = table.getFilteredSelectedRowModel().rows;
	const selectedCount = selectedRows.length;
	const hasMultipleSelected = selectedCount >= 1;

	const queryClient = useQueryClient();

	const handleBatchDelete = async () => {
		if (selectedCount === 0) return;

		setIsBatchDeleting(true);

		try {
			const selectedIds = selectedRows.map((row) => row.original.id);
			const response = await app.api.mei.batch.delete({
				ids: selectedIds,
			});

			if (response.status === 200 && response.data) {
				const { successCount, errorCount, errors } = response.data;

				if (errorCount === 0) {
					toast.success(`Successfully deleted ${successCount} MEI file(s)`);
				} else if (successCount > 0) {
					toast.warning(
						`Deleted ${successCount} file(s), ${errorCount} failed`,
					);
					// Show specific errors
					errors.forEach(({ id, error }: { id: string; error: string }) => {
						toast.error(`Failed to delete ${id}: ${error}`);
					});
				} else {
					toast.error("Failed to delete all selected files");
					errors.forEach(({ id, error }: { id: string; error: string }) => {
						toast.error(`Failed to delete ${id}: ${error}`);
					});
				}

				// Clear selection and refresh data
				setRowSelection({});
				invalidateMeiFiles(queryClient);
			} else {
				toast.error("Failed to delete selected files");
			}
		} catch (error) {
			toast.error("Failed to delete selected files");
			console.error("Batch delete error:", error);
		} finally {
			setIsBatchDeleting(false);
		}
	};

	const handleBatchReimport = async () => {
		if (selectedCount === 0) return;

		setIsBatchReimporting(true);

		try {
			const selectedIds = selectedRows.map((row) => row.original.id);
			const response = await app.api.mei.reimport.batch.post({
				ids: selectedIds,
			});

			if (response.status === 200 && response.data) {
				const { successCount, errorCount, errors } = response.data.data;

				if (errorCount === 0) {
					toast.success(`Successfully reimported ${successCount} MEI file(s)`);
				} else if (successCount > 0) {
					toast.warning(
						`Reimported ${successCount} file(s), ${errorCount} failed`,
					);
					// Show specific errors
					errors.forEach(({ id, error }: { id: string; error: string }) => {
						toast.error(`Failed to reimport ${id}: ${error}`);
					});
				} else {
					toast.error("Failed to reimport all selected files");
					errors.forEach(({ id, error }: { id: string; error: string }) => {
						toast.error(`Failed to reimport ${id}: ${error}`);
					});
				}

				// Clear selection and refresh data
				setRowSelection({});
				invalidateMeiFiles(queryClient);
			} else {
				toast.error("Failed to reimport selected files");
			}
		} catch (error) {
			toast.error("Failed to reimport selected files");
			console.error("Batch reimport error:", error);
		} finally {
			setIsBatchReimporting(false);
		}
	};

	// biome-ignore lint/correctness/noNestedComponentDefinitions: Just ignore here
	const TableContent = () => {
		return (
			<div className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6">
				<div className="overflow-hidden rounded-lg border">
					<Table>
						<TableHeader className="bg-muted sticky top-0 z-10">
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										return (
											<TableHead key={header.id} colSpan={header.colSpan}>
												{header.isPlaceholder
													? null
													: flexRender(
															header.column.columnDef.header,
															header.getContext(),
														)}
											</TableHead>
										);
									})}
								</TableRow>
							))}
						</TableHeader>
						<TableBody className="**:data-[slot=table-cell]:first:w-8">
							{table.getRowModel().rows?.length ? (
								<SortableContext
									items={dataIds}
									strategy={verticalListSortingStrategy}
								>
									{table.getRowModel().rows.map((row) => (
										<SelectableRow key={row.id} row={row} />
									))}
								</SortableContext>
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-24 text-center"
									>
										No MEI files found.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<div className="flex items-center justify-between px-4">
					<div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
						{table.getFilteredSelectedRowModel().rows.length} of{" "}
						{table.getFilteredRowModel().rows.length} row(s) selected. Total{" "}
						{data?.pagination.totalCount} rows.
					</div>
					<div className="flex w-full items-center gap-8 lg:w-fit">
						<div className="hidden items-center gap-2 lg:flex">
							<Label htmlFor="rows-per-page" className="text-sm font-medium">
								Rows per page
							</Label>
							<Select
								value={`${table.getState().pagination.pageSize}`}
								onValueChange={(value) => {
									table.setPageSize(Number(value));
								}}
							>
								<SelectTrigger size="sm" className="w-20">
									<SelectValue
										placeholder={table.getState().pagination.pageSize}
									/>
								</SelectTrigger>
								<SelectContent side="top">
									{[10, 20, 30, 40, 50].map((pageSize) => (
										<SelectItem key={pageSize} value={`${pageSize}`}>
											{pageSize}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex w-fit items-center justify-center text-sm font-medium">
							Page {table.getState().pagination.pageIndex + 1} of{" "}
							{table.getPageCount()}.
						</div>
						<div className="ml-auto flex items-center gap-2 lg:ml-0">
							<Button
								variant="outline"
								className="hidden h-8 w-8 p-0 lg:flex"
								onClick={() => table.setPageIndex(0)}
								disabled={!table.getCanPreviousPage()}
							>
								<span className="sr-only">Go to first page</span>
								<IconChevronsLeft />
							</Button>
							<Button
								variant="outline"
								className="size-8"
								size="icon"
								onClick={() => table.previousPage()}
								disabled={!table.getCanPreviousPage()}
							>
								<span className="sr-only">Go to previous page</span>
								<IconChevronLeft />
							</Button>
							<Button
								variant="outline"
								className="size-8"
								size="icon"
								onClick={() => table.nextPage()}
								disabled={!table.getCanNextPage()}
							>
								<span className="sr-only">Go to next page</span>
								<IconChevronRight />
							</Button>
							<Button
								variant="outline"
								className="hidden size-8 lg:flex"
								size="icon"
								onClick={() => table.setPageIndex(table.getPageCount() - 1)}
								disabled={!table.getCanNextPage()}
							>
								<span className="sr-only">Go to last page</span>
								<IconChevronsRight />
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="w-full flex-col justify-start gap-6">
			<div className="flex items-center justify-between px-4 lg:px-6 mb-2">
				<div className="flex items-center gap-2">
					<Input
						placeholder="Filter by title..."
						value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
						disabled={isLoading}
						onChange={(event) =>
							table.getColumn("title")?.setFilterValue(event.target.value)
						}
						className="max-w-sm"
					/>
				</div>
				<div className="flex items-center gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm" disabled={isLoading}>
								<IconLayoutColumns />
								<span className="hidden lg:inline">Customize Columns</span>
								<span className="lg:hidden">Columns</span>
								<IconChevronDown />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-56">
							{table
								.getAllColumns()
								.filter(
									(column) =>
										typeof column.accessorFn !== "undefined" &&
										column.getCanHide(),
								)
								.map((column) => {
									return (
										<DropdownMenuCheckboxItem
											key={column.id}
											className="capitalize"
											checked={column.getIsVisible()}
											onCheckedChange={(value) =>
												column.toggleVisibility(!!value)
											}
										>
											{column.id}
										</DropdownMenuCheckboxItem>
									);
								})}
						</DropdownMenuContent>
					</DropdownMenu>
					{hasMultipleSelected && (
						<>
							<Button
								variant="outline"
								size="sm"
								disabled={isLoading || isBatchReimporting}
								onClick={handleBatchReimport}
								className="min-w-8 duration-200 ease-linear"
							>
								<IconRefresh />
								<span className="hidden lg:inline ml-2">
									Reimport Selected ({selectedCount})
								</span>
							</Button>
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Button
										variant="destructive"
										size="sm"
										disabled={isLoading || isBatchDeleting}
										className="min-w-8 duration-200 ease-linear"
									>
										<IconTrash />
										<span className="hidden lg:inline ml-2">
											Delete Selected ({selectedCount})
										</span>
									</Button>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>
											Delete {selectedCount} MEI files?
										</AlertDialogTitle>
										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete{" "}
											{selectedCount} MEI file(s) and remove them from our
											servers.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>Cancel</AlertDialogCancel>
										<AlertDialogAction
											variant="destructive"
											onClick={handleBatchDelete}
											disabled={isBatchDeleting}
										>
											{isBatchDeleting ? "Deleting..." : "Delete"}
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</>
					)}
					<UploadMeiFileDialog>
						<Button
							variant="outline"
							size="sm"
							disabled={isLoading}
							className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
						>
							<IconUpload />
						</Button>
					</UploadMeiFileDialog>
				</div>
			</div>
			{isLoading ? (
				<div className="flex items-center justify-center">
					<div className="text-muted-foreground">Loading MEI files...</div>
				</div>
			) : (
				<TableContent />
			)}
		</div>
	);
}

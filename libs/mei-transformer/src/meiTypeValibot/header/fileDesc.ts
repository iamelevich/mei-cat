import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema, AttrCommonSchema, ExtentSchema } from "../shared";
import { EditionStmtSchema } from "./editionStmt";
import { NotesStmtSchema } from "./notesStmt";
import { PubStmtSchema } from "./pubStmt";
import { SeriesStmtSchema } from "./seriesStmt";
import { SourceDescSchema } from "./sourceDesc";
import { TitleStmtSchema } from "./titleStmt";

/**
 * Simplified schema for fileDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
 */
export const FileDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrBiblSchema.entries,

	/**
	 * Container for title and responsibility meta-data.
	 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
	 */
	titleStmt: v.lazy(() => TitleStmtSchema),

	/**
	 * Container for meta-data pertaining to a particular edition of the material being described.
	 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
	 */
	editionStmt: v.optional(v.lazy(() => EditionStmtSchema)),

	/**
	 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
	 * In this context represents file size.
	 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
	 */
	extent: v.optional(v.lazy(() => ExtentSchema)),

	/**
	 * Container for information regarding the publication or distribution of a bibliographic item, including the publisher's name and address, the date of publication, and other relevant details.
	 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
	 */
	pubStmt: v.lazy(() => PubStmtSchema),

	/**
	 * Groups information about the series, if any, to which a publication belongs.
	 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
	 */
	seriesStmt: v.optional(v.lazy(() => SeriesStmtSchema)),

	/**
	 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
	 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
	 */
	notesStmt: v.optional(v.lazy(() => NotesStmtSchema)),

	/**
	 * A container for the descriptions of the source(s) used in the creation of the electronic file.
	 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
	 */
	sourceDesc: v.optional(v.lazy(() => SourceDescSchema)),
});

export type FileDescData = v.InferOutput<typeof FileDescSchema>;

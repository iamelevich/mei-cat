import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema, AttrCommonSchema, ExtentSchema } from "../../shared";
import {
	EditionStmtSchema,
	NotesStmtSchema,
	PubStmtSchema,
	SeriesStmtSchema,
	SourceDescSchema,
	TitleStmtSchema,
} from ".";

/**
 * Base schema with attribute, to simplify types for FileDescSchema
 */
const FileDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Contains a full bibliographic description of the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
 */
export const FileDescSchema = v.intersect([
	FileDescBaseSchema,
	v.object({
		/**
		 * Reference to element editionStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
		 */
		editionStmt: v.optional(v.lazy(() => EditionStmtSchema)),
		/**
		 * Reference to element extent
		 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
		 */
		extent: v.optional(v.lazy(() => ExtentSchema)),
		/**
		 * Reference to element notesStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
		 */
		notesStmt: v.optional(v.lazy(() => NotesStmtSchema)),
		/**
		 * Reference to element pubStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
		 */
		pubStmt: v.optional(v.lazy(() => PubStmtSchema)),
		/**
		 * Reference to element seriesStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
		 */
		seriesStmt: v.optional(v.lazy(() => SeriesStmtSchema)),
		/**
		 * Reference to element sourceDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
		 */
		sourceDesc: v.optional(v.lazy(() => SourceDescSchema)),
		/**
		 * Reference to element titleStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
		 */
		titleStmt: v.optional(v.lazy(() => TitleStmtSchema)),
	}),
]);

export type FileDescData = v.InferOutput<typeof FileDescSchema>;

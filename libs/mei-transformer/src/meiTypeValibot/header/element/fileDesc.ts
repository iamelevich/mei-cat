import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ExtentSchema } from "../../shared/element/extent";
import { EditionStmtSchema } from "../element/editionStmt";
import { NotesStmtSchema } from "../element/notesStmt";
import { PubStmtSchema } from "../element/pubStmt";
import { SeriesStmtSchema } from "../element/seriesStmt";
import { SourceDescSchema } from "../element/sourceDesc";
import { TitleStmtSchema } from "../element/titleStmt";

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
export const FileDescSchema = v.lazy(() =>
	v.intersect([
		FileDescBaseSchema,
		v.object({
			/**
			 * Reference to element editionStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
			 */
			editionStmt: v.optional(EditionStmtSchema),
			/**
			 * Reference to element extent
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: v.optional(ExtentSchema),
			/**
			 * Reference to element notesStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: v.optional(NotesStmtSchema),
			/**
			 * Reference to element pubStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
			 */
			pubStmt: PubStmtSchema,
			/**
			 * Reference to element seriesStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
			 */
			seriesStmt: v.optional(SeriesStmtSchema),
			/**
			 * Reference to element sourceDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
			 */
			sourceDesc: v.optional(SourceDescSchema),
			/**
			 * Reference to element titleStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
			 */
			titleStmt: TitleStmtSchema,
		}),
	]),
);

export type FileDescData = v.InferOutput<typeof FileDescSchema>;

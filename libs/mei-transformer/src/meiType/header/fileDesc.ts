import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { EditionStmtSchema } from "./editionStmt";
import { NotesStmtSchema } from "./notesStmt";
import { PubStmtSchema } from "./pubStmt";
import { SeriesStmtSchema } from "./seriesStmt";
import { SourceDescSchema } from "./sourceDesc";
import { TitleStmtSchema } from "./titleStmt";

/**
 * Contains a full bibliographic description of the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
 */
export const FileDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Container for title and responsibility meta-data.
			 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
			 */
			titleStmt: TitleStmtSchema,
			/**
			 * Container for meta-data pertaining to a particular edition of the material being described.
			 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
			 */
			editionStmt: Type.Optional(EditionStmtSchema),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(NotImplementedTagSchema),
			/**
			 * Container for information regarding the publication or distribution of a bibliographic item, including the publisher's name and address, the date of publication, and other relevant details.
			 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
			 */
			pubStmt: PubStmtSchema,
			/**
			 * Groups information about the series, if any, to which a publication belongs.
			 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
			 */
			seriesStmt: Type.Optional(SeriesStmtSchema),
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(NotesStmtSchema),
			/**
			 * A container for the descriptions of the source(s) used in the creation of the electronic file.
			 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
			 */
			sourceDesc: Type.Optional(SourceDescSchema),
		},
		{ additionalProperties: false },
	),
]);

export type FileDesc = Static<typeof FileDescSchema>;

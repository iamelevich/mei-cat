import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { TitleStmtSchema } from "./titleStmt";

/**
 * Contains a full bibliographic description of the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
 */
export const FileDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			// --- MEI.header Metadata header component declarations ---
			/**
			 * Container for title and responsibility meta-data.
			 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
			 */
			titleStmt: TitleStmtSchema,
			/**
			 * Container for meta-data pertaining to a particular edition of the material being described.
			 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
			 */
			editionStmt: Type.Optional(NotImplementedTagSchema),
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(NotImplementedTagSchema),
			/**
			 * Container for information regarding the publication or distribution of a bibliographic item,
			 * including the publisher's name and address, the date of publication, and other relevant details.
			 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
			 */
			pubStmt: Type.Optional(NotImplementedTagSchema),
			/**
			 * Groups information about the series, if any, to which a publication belongs.
			 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
			 */
			seriesStmt: Type.Optional(NotImplementedTagSchema),
			/**
			 * A container for the descriptions of the source(s) used in the creation of the electronic file.
			 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
			 */
			sourceDesc: Type.Optional(NotImplementedTagSchema),

			// --- MEI.shared Component declarations that are shared between two or more modules ---
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(NotImplementedTagSchema),
		},
		{ additionalProperties: false },
	),
]);

export type FileDesc = Static<typeof FileDescSchema>;

import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

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
			titleStmt: Type.Ref("titleStmt"),
			/**
			 * Container for meta-data pertaining to a particular edition of the material being described.
			 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
			 */
			editionStmt: Type.Optional(Type.Ref("editionStmt")),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * In this context represents file size.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: Type.Optional(Type.Ref("extent")),
			/**
			 * Container for information regarding the publication or distribution of a bibliographic item, including the publisher's name and address, the date of publication, and other relevant details.
			 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
			 */
			pubStmt: Type.Ref("pubStmt"),
			/**
			 * Groups information about the series, if any, to which a publication belongs.
			 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
			 */
			seriesStmt: Type.Optional(Type.Ref("seriesStmt")),
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(Type.Ref("notesStmt")),
			/**
			 * A container for the descriptions of the source(s) used in the creation of the electronic file.
			 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
			 */
			sourceDesc: Type.Optional(Type.Ref("sourceDesc")),
		},
		{ additionalProperties: false },
	),
]);

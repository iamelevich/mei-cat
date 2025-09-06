import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AnnotSchema } from "../shared/annot";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { HeadSchema } from "../shared/head";

/**
 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
 */
export const NotesStmtSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Union([AnnotSchema, Type.Array(AnnotSchema)]),
		},
		{ additionalProperties: false },
	),
]);

export type NotesStmt = Static<typeof NotesStmtSchema>;

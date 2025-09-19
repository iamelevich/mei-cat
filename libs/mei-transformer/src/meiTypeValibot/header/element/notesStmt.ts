import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelAnnotLikeSchema } from "../../shared/model/annotLike";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";

/**
 * Base schema with attribute, to simplify types for NotesStmtSchema
 */
const NotesStmtBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
 */
export const NotesStmtSchema = v.lazy(() =>
	v.intersect([NotesStmtBaseSchema, ModelAnnotLikeSchema, ModelHeadLikeSchema]),
);

export type NotesStmtData = v.InferOutput<typeof NotesStmtSchema>;

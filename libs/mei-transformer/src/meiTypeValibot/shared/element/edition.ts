import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { EditorSchema } from "../element/editor";
import { RespStmtSchema } from "../element/respStmt";
import { TextLangSchema } from "../element/textLang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for EditionSchema
 */
const EditionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A word or text phrase that indicates a difference in either content or form between the item being described and a related item previously issued by the same publisher/distributor (<abbr>e.g.</abbr>, 2nd edition, version 2.0, etc.), or simultaneously issued by either the same publisher/distributor or another publisher/distributor (<abbr>e.g.</abbr>, large print edition, British edition, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/edition.html
 */
export const EditionSchema = v.lazy(() =>
	v.intersect([
		EditionBaseSchema,
		v.object({
			/**
			 * Reference to element editor
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: v.optional(v.union([v.array(EditorSchema), EditorSchema])),
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.optional(v.union([v.array(RespStmtSchema), RespStmtSchema])),
			/**
			 * Reference to element textLang
			 * @see https://music-encoding.org/guidelines/v5/elements/textLang.html
			 */
			textLang: v.optional(v.union([v.array(TextLangSchema), TextLangSchema])),
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type EditionData = v.InferOutput<typeof EditionSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelPLikeSchema } from "../../shared/model/pLike";

/**
 * Base schema with attribute, to simplify types for ChangeDescSchema
 */
const ChangeDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Description of a revision of the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/changeDesc.html
 */
export const ChangeDescSchema = v.lazy(() =>
	v.intersect([ChangeDescBaseSchema, ModelPLikeSchema]),
);

export type ChangeDescData = v.InferOutput<typeof ChangeDescSchema>;

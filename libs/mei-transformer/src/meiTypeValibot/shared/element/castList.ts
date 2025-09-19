import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { CastGrpSchema } from "../element/castGrp";
import { CastItemSchema } from "../element/castItem";
import { ModelHeadLikeSchema } from "../model/headLike";

/**
 * Base schema with attribute, to simplify types for CastListSchema
 */
const CastListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a single cast list or dramatis personae.
 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
 */
export const CastListSchema = v.lazy(() =>
	v.intersect([
		CastListBaseSchema,
		v.object({
			/**
			 * Reference to element castGrp
			 * @see https://music-encoding.org/guidelines/v5/elements/castGrp.html
			 */
			castGrp: v.union([v.array(CastGrpSchema), CastGrpSchema]),
			/**
			 * Reference to element castItem
			 * @see https://music-encoding.org/guidelines/v5/elements/castItem.html
			 */
			castItem: v.union([v.array(CastItemSchema), CastItemSchema]),
		}),
		ModelHeadLikeSchema,
	]),
);

export type CastListData = v.InferOutput<typeof CastListSchema>;

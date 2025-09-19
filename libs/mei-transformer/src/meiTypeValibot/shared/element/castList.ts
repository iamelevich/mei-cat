import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
} from "..";
import { CastGrpSchema, CastItemSchema } from ".";

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
export const CastListSchema = v.intersect([
	CastListBaseSchema,
	v.object({
		/**
		 * Reference to element castGrp
		 * @see https://music-encoding.org/guidelines/v5/elements/castGrp.html
		 */
		castGrp: v.union([
			v.lazy(() => CastGrpSchema),
			v.array(v.lazy(() => CastGrpSchema)),
		]),
		/**
		 * Reference to element castItem
		 * @see https://music-encoding.org/guidelines/v5/elements/castItem.html
		 */
		castItem: v.union([
			v.lazy(() => CastItemSchema),
			v.array(v.lazy(() => CastItemSchema)),
		]),
	}),
	ModelHeadLikeSchema,
]);

export type CastListData = v.InferOutput<typeof CastListSchema>;

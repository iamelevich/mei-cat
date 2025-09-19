import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { LabelSchema } from "../../shared/element/label";
import { TermSchema } from "../../shared/element/term";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";

/**
 * Base schema with attribute, to simplify types for TermListSchema
 */
const TermListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * Collection of text phrases which describe a resource.
 * @see https://music-encoding.org/guidelines/v5/elements/termList.html
 */
export const TermListSchema = v.lazy(() =>
	v.intersect([
		TermListBaseSchema,
		v.object({
			/**
			 * Reference to element label
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.optional(v.union([LabelSchema, v.array(LabelSchema)])),
			/**
			 * Reference to element term
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: v.optional(v.union([TermSchema, v.array(TermSchema)])),
		}),
		ModelHeadLikeSchema,
	]),
);

export type TermListData = v.InferOutput<typeof TermListSchema>;

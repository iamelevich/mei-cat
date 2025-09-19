import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrSourceSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for DescSchema
 */
const DescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
 */
export const DescSchema = v.intersect([
	DescBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type DescData = v.InferOutput<typeof DescSchema>;

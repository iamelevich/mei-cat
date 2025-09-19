import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrSourceSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for LabelSchema
 */
const LabelBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * A container for document text that identifies the feature to which it is attached. For a "tool tip" or other generated label, use the <att>label</att> attribute.
 * @see https://music-encoding.org/guidelines/v5/elements/label.html
 */
export const LabelSchema = v.intersect([
	LabelBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type LabelData = v.InferOutput<typeof LabelSchema>;

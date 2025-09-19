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
 * Base schema with attribute, to simplify types for LabelAbbrSchema
 */
const LabelAbbrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * A label on the pages following the first.
 * @see https://music-encoding.org/guidelines/v5/elements/labelAbbr.html
 */
export const LabelAbbrSchema = v.intersect([
	LabelAbbrBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type LabelAbbrData = v.InferOutput<typeof LabelAbbrSchema>;

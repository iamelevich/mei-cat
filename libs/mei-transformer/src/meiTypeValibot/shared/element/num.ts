import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrMeasurementSchema,
	AttrRangingSchema,
	ModelTextPhraseLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for NumSchema
 */
const NumBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMeasurementSchema.entries,
	...AttrRangingSchema.entries,

	// Direct attributes
	/**
	 * Numeric value capturing a measurement or count. Can only be interpreted in combination with the unit attribute.
	 */
	"@value": v.optional(v.string()),
});

/**
 * Numeric information in any form.
 * @see https://music-encoding.org/guidelines/v5/elements/num.html
 */
export const NumSchema = v.intersect([
	NumBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type NumData = v.InferOutput<typeof NumSchema>;

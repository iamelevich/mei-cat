import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrMeasurementSchema } from "../attr/measurement";
import { AttrRangingSchema } from "../attr/ranging";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

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
export const NumSchema = v.lazy(() =>
	v.intersect([
		NumBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type NumData = v.InferOutput<typeof NumSchema>;

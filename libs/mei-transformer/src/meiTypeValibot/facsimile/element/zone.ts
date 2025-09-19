import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrCoordinatedSchema,
	AttrDataPointingSchema,
} from "../../shared";
import { ModelFigDescLikeSchema, ModelGraphicLikeSchema } from "../../figtable";

/**
 * Base schema with attribute, to simplify types for ZoneSchema
 */
const ZoneBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCoordinatedSchema.entries,
	...AttrDataPointingSchema.entries,
});

/**
 * Defines an area of interest within a <gi scheme="MEI">surface</gi> or graphic file.
 * @see https://music-encoding.org/guidelines/v5/elements/zone.html
 */
export const ZoneSchema = v.intersect([
	ZoneBaseSchema,
	ModelFigDescLikeSchema,
	ModelGraphicLikeSchema,
]);

export type ZoneData = v.InferOutput<typeof ZoneSchema>;

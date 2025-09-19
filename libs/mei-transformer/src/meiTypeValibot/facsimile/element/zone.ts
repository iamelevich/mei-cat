import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelFigDescLikeSchema } from "../../figtable/model/figDescLike";
import { ModelGraphicLikeSchema } from "../../figtable/model/graphicLike";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrCoordinatedSchema } from "../../shared/attr/coordinated";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";

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
export const ZoneSchema = v.lazy(() =>
	v.intersect([ZoneBaseSchema, ModelFigDescLikeSchema, ModelGraphicLikeSchema]),
);

export type ZoneData = v.InferOutput<typeof ZoneSchema>;

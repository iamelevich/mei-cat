import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDimensionsSchema } from "../../shared/attr/dimensions";
import { AttrMeasurementSchema } from "../../shared/attr/measurement";
import { AttrFoliumSurfacesSchema } from "../attr/foliumSurfaces";
import { ModelPaperModLikeSchema } from "../model/paperModLike";

/**
 * Base schema with attribute, to simplify types for FoliumSchema
 */
const FoliumBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDimensionsSchema.entries,
	...AttrFoliumSurfacesSchema.entries,
	...AttrMeasurementSchema.entries,
});

/**
 * Describes a single leaf of paper.
 * @see https://music-encoding.org/guidelines/v5/elements/folium.html
 */
export const FoliumSchema = v.lazy(() =>
	v.intersect([FoliumBaseSchema, ModelPaperModLikeSchema]),
);

export type FoliumData = v.InferOutput<typeof FoliumSchema>;

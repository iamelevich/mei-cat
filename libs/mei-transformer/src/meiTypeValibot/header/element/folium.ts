import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrDimensionsSchema,
	AttrMeasurementSchema,
} from "../../shared";
import { AttrFoliumSurfacesSchema, ModelPaperModLikeSchema } from "..";

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
export const FoliumSchema = v.intersect([
	FoliumBaseSchema,
	ModelPaperModLikeSchema,
]);

export type FoliumData = v.InferOutput<typeof FoliumSchema>;

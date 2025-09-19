import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ZoneSchema } from "../../facsimile/element/zone";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrCoordinatedUlSchema } from "../../shared/attr/coordinated.ul";
import { AttrDimensionsSchema } from "../../shared/attr/dimensions";
import { AttrInternetMediaSchema } from "../../shared/attr/internetMedia";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { AttrStartIdSchema } from "../../shared/attr/startId";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";

/**
 * Base schema with attribute, to simplify types for GraphicSchema
 */
const GraphicBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCoordinatedUlSchema.entries,
	...AttrDimensionsSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrStartIdSchema.entries,
	...AttrVisualOffsetSchema.entries,
});

/**
 * Indicates the location of an inline graphic.
 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
 */
export const GraphicSchema = v.lazy(() =>
	v.intersect([
		GraphicBaseSchema,
		v.object({
			/**
			 * Reference to element zone
			 * @see https://music-encoding.org/guidelines/v5/elements/zone.html
			 */
			zone: v.optional(v.union([ZoneSchema, v.array(ZoneSchema)])),
		}),
	]),
);

export type GraphicData = v.InferOutput<typeof GraphicSchema>;

import * as v from "valibot";
import { AttrSpaceAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSpaceGesSchema } from "../../gestural";
import { AttrDurationQualitySchema } from "../../mensural";
import { AttrSpaceVisSchema } from "../../visual";
import { AttrCommonSchema, AttrSpaceLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for SpaceSchema
 */
const SpaceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDurationQualitySchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSpaceAnlSchema.entries,
	...AttrSpaceGesSchema.entries,
	...AttrSpaceLogSchema.entries,
	...AttrSpaceVisSchema.entries,
});

/**
 * A placeholder used to fill an incomplete measure, layer, etc. most often so that the combined duration of the events equals the number of beats in the measure.
 * @see https://music-encoding.org/guidelines/v5/elements/space.html
 */
export const SpaceSchema = v.intersect([SpaceBaseSchema]);

export type SpaceData = v.InferOutput<typeof SpaceSchema>;

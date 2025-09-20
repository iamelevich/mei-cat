import * as v from "valibot";
import { AttrSpaceAnlSchema } from "../../analytical/attr/space.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrSpaceGesSchema } from "../../gestural/attr/space.ges";
import { AttrDurationQualitySchema } from "../../mensural/attr/duration.quality";
import { AttrSpaceVisSchema } from "../../visual/attr/space.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrSpaceLogSchema } from "../attr/space.log";

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
export const SpaceSchema = v.lazy(() => v.intersect([SpaceBaseSchema]));

export type SpaceData = v.InferOutput<typeof SpaceSchema>;

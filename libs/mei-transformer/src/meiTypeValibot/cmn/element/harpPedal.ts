import * as v from "valibot";
import { AttrHarpPedalAnlSchema } from "../../analytical/attr/harpPedal.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrHarpPedalGesSchema } from "../../gestural/attr/harpPedal.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrHarpPedalVisSchema } from "../../visual/attr/harpPedal.vis";
import { AttrHarpPedalLogSchema } from "../attr/harpPedal.log";

/**
 * Base schema with attribute, to simplify types for HarpPedalSchema
 */
const HarpPedalBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHarpPedalAnlSchema.entries,
	...AttrHarpPedalGesSchema.entries,
	...AttrHarpPedalLogSchema.entries,
	...AttrHarpPedalVisSchema.entries,
});

/**
 * Harp pedal diagram.
 * @see https://music-encoding.org/guidelines/v5/elements/harpPedal.html
 */
export const HarpPedalSchema = v.lazy(() => v.intersect([HarpPedalBaseSchema]));

export type HarpPedalData = v.InferOutput<typeof HarpPedalSchema>;

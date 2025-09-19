import * as v from "valibot";
import { AttrHarpPedalAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrHarpPedalGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrHarpPedalVisSchema } from "../../visual";
import { AttrHarpPedalLogSchema } from "..";

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
export const HarpPedalSchema = v.intersect([HarpPedalBaseSchema]);

export type HarpPedalData = v.InferOutput<typeof HarpPedalSchema>;

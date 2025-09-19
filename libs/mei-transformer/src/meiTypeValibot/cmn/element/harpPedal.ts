import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrHarpPedalAnlSchema } from "../../analytical";
import { AttrHarpPedalGesSchema } from "../../gestural";
import { AttrHarpPedalLogSchema } from "..";
import { AttrHarpPedalVisSchema } from "../../visual";

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

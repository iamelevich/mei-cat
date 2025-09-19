import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrPedalAnlSchema } from "../../analytical";
import { AttrPedalGesSchema } from "../../gestural";
import { AttrPedalLogSchema } from "..";
import { AttrPedalVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for PedalSchema
 */
const PedalBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPedalAnlSchema.entries,
	...AttrPedalGesSchema.entries,
	...AttrPedalLogSchema.entries,
	...AttrPedalVisSchema.entries,
});

/**
 * Piano pedal mark.
 * @see https://music-encoding.org/guidelines/v5/elements/pedal.html
 */
export const PedalSchema = v.intersect([PedalBaseSchema]);

export type PedalData = v.InferOutput<typeof PedalSchema>;

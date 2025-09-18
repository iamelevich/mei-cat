import * as v from "valibot";
import { AttrPedalAnlSchema } from "../analytical/attr/pedal.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrPedalGesSchema } from "../gestural/attr/pedal.ges";
import { AttrCommonSchema } from "../shared";
import { AttrPedalVisSchema } from "../visual/attr/pedal.vis";
import { AttrPedalLogSchema } from "./attr/pedal.log";

/**
 * Piano pedal mark.
 * @see https://music-encoding.org/guidelines/v5/elements/pedal.html
 */
export const PedalSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPedalLogSchema.entries,
	...AttrPedalVisSchema.entries,
	...AttrPedalGesSchema.entries,
	...AttrPedalAnlSchema.entries,
});

export type PedalData = v.InferOutput<typeof PedalSchema>;

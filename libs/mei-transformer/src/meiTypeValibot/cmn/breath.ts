import * as v from "valibot";
import { AttrBreathAnlSchema } from "../analytical/attr/breath.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrBreathGesSchema } from "../gestural/attr/breath.ges";
import { AttrCommonSchema } from "../shared";
import { AttrBreathVisSchema } from "../visual/attr/breath.vis";
import { AttrBreathLogSchema } from "./attr/breath.log";

/**
 * An indication of a point at which the performer on an instrument requiring breath (including the voice) may breathe.
 * @see https://music-encoding.org/guidelines/v5/elements/breath.html
 */
export const BreathSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrBreathLogSchema.entries,
	...AttrBreathVisSchema.entries,
	...AttrBreathGesSchema.entries,
	...AttrBreathAnlSchema.entries,
});

export type BreathData = v.InferOutput<typeof BreathSchema>;

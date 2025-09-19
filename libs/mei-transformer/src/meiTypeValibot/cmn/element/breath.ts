import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBreathAnlSchema } from "../../analytical";
import { AttrBreathGesSchema } from "../../gestural";
import { AttrBreathLogSchema } from "..";
import { AttrBreathVisSchema } from "../../visual";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for BreathSchema
 */
const BreathBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBreathAnlSchema.entries,
	...AttrBreathGesSchema.entries,
	...AttrBreathLogSchema.entries,
	...AttrBreathVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * An indication of a point at which the performer on an instrument requiring breath (including the voice) may breathe.
 * @see https://music-encoding.org/guidelines/v5/elements/breath.html
 */
export const BreathSchema = v.intersect([BreathBaseSchema]);

export type BreathData = v.InferOutput<typeof BreathSchema>;

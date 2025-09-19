import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrOctaveAnlSchema } from "../../analytical";
import { AttrOctaveGesSchema } from "../../gestural";
import { AttrOctaveLogSchema } from "..";
import { AttrOctaveVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for OctaveSchema
 */
const OctaveBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrOctaveAnlSchema.entries,
	...AttrOctaveGesSchema.entries,
	...AttrOctaveLogSchema.entries,
	...AttrOctaveVisSchema.entries,
});

/**
 * An indication that a passage should be performed one or more octaves above or below its written pitch.
 * @see https://music-encoding.org/guidelines/v5/elements/octave.html
 */
export const OctaveSchema = v.intersect([
	OctaveBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type OctaveData = v.InferOutput<typeof OctaveSchema>;

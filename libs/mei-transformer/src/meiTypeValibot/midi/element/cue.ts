import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrLangSchema } from "../../shared";
import { AttrMidiEventSchema } from "..";

/**
 * Base schema with attribute, to simplify types for CueSchema
 */
const CueBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrMidiEventSchema.entries,
});

/**
 * MIDI cue point.
 * @see https://music-encoding.org/guidelines/v5/elements/cue.html
 */
export const CueSchema = v.intersect([CueBaseSchema]);

export type CueData = v.InferOutput<typeof CueSchema>;

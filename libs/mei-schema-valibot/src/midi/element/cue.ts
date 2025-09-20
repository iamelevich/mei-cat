import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMidiEventSchema } from "../attr/midi.event";

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
export const CueSchema = v.lazy(() => v.intersect([CueBaseSchema]));

export type CueData = v.InferOutput<typeof CueSchema>;

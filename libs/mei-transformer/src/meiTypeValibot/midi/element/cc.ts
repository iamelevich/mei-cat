import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMidiEventSchema } from "../attr/midi.event";
import { AttrMidiNumberSchema } from "../attr/midiNumber";
import { AttrMidiValueSchema } from "../attr/midiValue";

/**
 * Base schema with attribute, to simplify types for CcSchema
 */
const CcBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
	...AttrMidiNumberSchema.entries,
	...AttrMidiValueSchema.entries,
});

/**
 * MIDI parameter/control change.
 * @see https://music-encoding.org/guidelines/v5/elements/cc.html
 */
export const CcSchema = v.lazy(() => v.intersect([CcBaseSchema]));

export type CcData = v.InferOutput<typeof CcSchema>;

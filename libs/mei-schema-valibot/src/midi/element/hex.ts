import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMidiEventSchema } from "../attr/midi.event";

/**
 * Base schema with attribute, to simplify types for HexSchema
 */
const HexBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
});

/**
 * Arbitrary MIDI data in hexadecimal form.
 * @see https://music-encoding.org/guidelines/v5/elements/hex.html
 */
export const HexSchema = v.lazy(() => v.intersect([HexBaseSchema]));

export type HexData = v.InferOutput<typeof HexSchema>;

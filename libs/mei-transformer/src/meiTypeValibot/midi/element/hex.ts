import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrMidiEventSchema } from "..";

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
export const HexSchema = v.intersect([HexBaseSchema]);

export type HexData = v.InferOutput<typeof HexSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrMidiEventSchema, AttrMidiNumberSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ChanPrSchema
 */
const ChanPrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
	...AttrMidiNumberSchema.entries,
});

/**
 * MIDI channel pressure/after touch.
 * @see https://music-encoding.org/guidelines/v5/elements/chanPr.html
 */
export const ChanPrSchema = v.intersect([ChanPrBaseSchema]);

export type ChanPrData = v.InferOutput<typeof ChanPrSchema>;

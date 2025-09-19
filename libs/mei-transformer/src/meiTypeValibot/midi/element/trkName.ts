import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrLangSchema } from "../../shared";
import { AttrMidiEventSchema } from "..";

/**
 * Base schema with attribute, to simplify types for TrkNameSchema
 */
const TrkNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrMidiEventSchema.entries,
});

/**
 * MIDI track/sequence name.
 * @see https://music-encoding.org/guidelines/v5/elements/trkName.html
 */
export const TrkNameSchema = v.intersect([TrkNameBaseSchema]);

export type TrkNameData = v.InferOutput<typeof TrkNameSchema>;

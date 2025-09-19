import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrLangSchema } from "../../shared";
import { AttrMidiEventSchema } from "..";

/**
 * Base schema with attribute, to simplify types for MetaTextSchema
 */
const MetaTextBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrMidiEventSchema.entries,
});

/**
 * MIDI text meta-event.
 * @see https://music-encoding.org/guidelines/v5/elements/metaText.html
 */
export const MetaTextSchema = v.intersect([MetaTextBaseSchema]);

export type MetaTextData = v.InferOutput<typeof MetaTextSchema>;

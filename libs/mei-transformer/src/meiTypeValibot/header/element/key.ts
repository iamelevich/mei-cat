import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAccidentalSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrKeyModeSchema,
	AttrPitchSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for KeySchema
 */
const KeyBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAccidentalSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrKeyModeSchema.entries,
	...AttrPitchSchema.entries,
});

/**
 * Key captures information about tonal center and mode.
 * @see https://music-encoding.org/guidelines/v5/elements/key.html
 */
export const KeySchema = v.intersect([KeyBaseSchema]);

export type KeyData = v.InferOutput<typeof KeySchema>;

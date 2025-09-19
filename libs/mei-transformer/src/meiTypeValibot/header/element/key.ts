import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAccidentalSchema } from "../../shared/attr/accidental";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrKeyModeSchema } from "../../shared/attr/keyMode";
import { AttrPitchSchema } from "../../shared/attr/pitch";

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
export const KeySchema = v.lazy(() => v.intersect([KeyBaseSchema]));

export type KeyData = v.InferOutput<typeof KeySchema>;

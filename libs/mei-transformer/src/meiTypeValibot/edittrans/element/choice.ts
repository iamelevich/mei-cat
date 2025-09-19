import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { ModelChoicePartSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ChoiceSchema
 */
const ChoiceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Groups a number of alternative encodings for the same point in a text.
 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
 */
export const ChoiceSchema = v.intersect([
	ChoiceBaseSchema,
	ModelChoicePartSchema,
]);

export type ChoiceData = v.InferOutput<typeof ChoiceSchema>;

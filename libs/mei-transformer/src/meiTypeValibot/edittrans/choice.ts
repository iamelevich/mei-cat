import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared";
import { ChoicePartSchema } from "./model/choicePart";

/**
 * Groups a number of alternative encodings for the same point in a text.
 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
 */
export const ChoiceSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
	}),
	ChoicePartSchema,
]);

export type ChoiceData = v.InferOutput<typeof ChoiceSchema>;

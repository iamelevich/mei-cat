import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for choice element.
 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
 */
export const ChoiceSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ChoiceData = v.InferOutput<typeof ChoiceSchema>;

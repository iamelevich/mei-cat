import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for handShift element.
 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
 */
export const HandShiftSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type HandShiftData = v.InferOutput<typeof HandShiftSchema>;

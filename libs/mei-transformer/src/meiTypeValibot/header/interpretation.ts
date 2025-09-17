import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for interpretation element.
 * @see https://music-encoding.org/guidelines/v5/elements/interpretation.html
 */
export const InterpretationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type InterpretationData = v.InferOutput<typeof InterpretationSchema>;

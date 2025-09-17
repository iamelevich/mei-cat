import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for specRepro element.
 * @see https://music-encoding.org/guidelines/v5/elements/specRepro.html
 */
export const SpecReproSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SpecReproData = v.InferOutput<typeof SpecReproSchema>;

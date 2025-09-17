import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for damage element.
 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
 */
export const DamageSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DamageData = v.InferOutput<typeof DamageSchema>;

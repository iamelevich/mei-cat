import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for bifolium element.
 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
 */
export const BifoliumSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type BifoliumData = v.InferOutput<typeof BifoliumSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for physDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
 */
export const PhysDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PhysDescData = v.InferOutput<typeof PhysDescSchema>;

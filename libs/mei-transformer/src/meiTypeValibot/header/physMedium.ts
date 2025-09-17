import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for physMedium element.
 * @see https://music-encoding.org/guidelines/v5/elements/physMedium.html
 */
export const PhysMediumSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PhysMediumData = v.InferOutput<typeof PhysMediumSchema>;

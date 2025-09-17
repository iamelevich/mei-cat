import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for componentList element.
 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
 */
export const ComponentListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ComponentListData = v.InferOutput<typeof ComponentListSchema>;

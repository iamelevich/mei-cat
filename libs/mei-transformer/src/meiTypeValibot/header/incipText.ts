import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for incipText element.
 * @see https://music-encoding.org/guidelines/v5/elements/incipText.html
 */
export const IncipTextSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type IncipTextData = v.InferOutput<typeof IncipTextSchema>;

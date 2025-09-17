import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for taxonomy element.
 * @see https://music-encoding.org/guidelines/v5/elements/taxonomy.html
 */
export const TaxonomySchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TaxonomyData = v.InferOutput<typeof TaxonomySchema>;

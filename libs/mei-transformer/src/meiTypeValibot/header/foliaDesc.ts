import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for foliaDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/foliaDesc.html
 */
export const FoliaDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type FoliaDescData = v.InferOutput<typeof FoliaDescSchema>;

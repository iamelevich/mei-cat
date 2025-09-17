import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for extMeta element.
 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
 */
export const ExtMetaSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ExtMetaData = v.InferOutput<typeof ExtMetaSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for namespace element.
 * @see https://music-encoding.org/guidelines/v5/elements/namespace.html
 */
export const NamespaceSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type NamespaceData = v.InferOutput<typeof NamespaceSchema>;

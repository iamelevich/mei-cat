import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for relation element.
 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
 */
export const RelationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type RelationData = v.InferOutput<typeof RelationSchema>;

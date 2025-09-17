import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for creation element.
 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
 */
export const CreationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CreationData = v.InferOutput<typeof CreationSchema>;

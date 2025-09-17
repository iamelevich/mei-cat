import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for author element.
 * @see https://music-encoding.org/guidelines/v5/elements/author.html
 */
export const AuthorSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AuthorData = v.InferOutput<typeof AuthorSchema>;

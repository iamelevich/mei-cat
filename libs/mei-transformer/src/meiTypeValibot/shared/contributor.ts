import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for contributor element.
 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
 */
export const ContributorSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ContributorData = v.InferOutput<typeof ContributorSchema>;

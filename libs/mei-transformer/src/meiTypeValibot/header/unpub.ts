import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for unpub element.
 * @see https://music-encoding.org/guidelines/v5/elements/unpub.html
 */
export const UnpubSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type UnpubData = v.InferOutput<typeof UnpubSchema>;

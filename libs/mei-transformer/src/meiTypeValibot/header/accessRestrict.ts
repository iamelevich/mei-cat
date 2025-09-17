import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for accessRestrict element.
 * @see https://music-encoding.org/guidelines/v5/elements/accessRestrict.html
 */
export const AccessRestrictSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AccessRestrictData = v.InferOutput<typeof AccessRestrictSchema>;

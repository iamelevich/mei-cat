import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for postCode element.
 * @see https://music-encoding.org/guidelines/v5/elements/postCode.html
 */
export const PostCodeSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PostCodeData = v.InferOutput<typeof PostCodeSchema>;

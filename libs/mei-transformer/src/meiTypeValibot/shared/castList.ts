import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for castList element.
 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
 */
export const CastListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CastListData = v.InferOutput<typeof CastListSchema>;

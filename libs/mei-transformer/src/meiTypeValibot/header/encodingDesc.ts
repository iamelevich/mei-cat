import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for encodingDesc element.
 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
 */
export const EncodingDescSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type EncodingDescData = v.InferOutput<typeof EncodingDescSchema>;

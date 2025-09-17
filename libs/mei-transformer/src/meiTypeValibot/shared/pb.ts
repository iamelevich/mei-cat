import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for pb element.
 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
 */
export const PbSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PbData = v.InferOutput<typeof PbSchema>;

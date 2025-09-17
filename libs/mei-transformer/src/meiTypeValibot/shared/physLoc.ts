import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for physLoc element.
 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
 */
export const PhysLocSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PhysLocData = v.InferOutput<typeof PhysLocSchema>;

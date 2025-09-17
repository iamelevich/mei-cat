import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for identifier element.
 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
 */
export const IdentifierSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type IdentifierData = v.InferOutput<typeof IdentifierSchema>;

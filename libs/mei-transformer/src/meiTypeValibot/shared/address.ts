import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for address element.
 * @see https://music-encoding.org/guidelines/v5/elements/address.html
 */
export const AddressSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AddressData = v.InferOutput<typeof AddressSchema>;

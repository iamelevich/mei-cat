import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrPointingSchema } from "../shared/attr/pointing";

/**
 * Defines a traversible pointer to another location, using only attributes to describe the destination.
 * The ptr element is empty and uses only attributes to describe the destination.
 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
 */
export const PtrSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrPointingSchema.entries,
});

export type PtrData = v.InferOutput<typeof PtrSchema>;

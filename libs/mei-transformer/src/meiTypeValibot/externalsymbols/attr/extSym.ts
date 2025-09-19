import * as v from "valibot";
import { AttrExtSymAuthSchema, AttrExtSymNamesSchema } from "..";

/**
 * Attributes used to associate MEI features with corresponding glyphs in an externally-defined standard such as SMuFL..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extSym.html
 */
export const AttrExtSymSchema = v.object({
	// Inherited attribute classes
	...AttrExtSymAuthSchema.entries,
	...AttrExtSymNamesSchema.entries,
});

export type AttrExtSymData = v.InferOutput<typeof AttrExtSymSchema>;

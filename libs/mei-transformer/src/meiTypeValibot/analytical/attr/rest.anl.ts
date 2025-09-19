import * as v from "valibot";
import { AttrRestAnlCmnSchema } from "../../cmn";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.anl.html
 */
export const AttrRestAnlSchema = v.object({
	// Inherited attribute classes
	...AttrRestAnlCmnSchema.entries,
});

export type AttrRestAnlData = v.InferOutput<typeof AttrRestAnlSchema>;

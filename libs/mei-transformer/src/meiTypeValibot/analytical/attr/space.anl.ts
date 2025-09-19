import * as v from "valibot";
import { AttrSpaceAnlCmnSchema } from "../../cmn";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.anl.html
 */
export const AttrSpaceAnlSchema = v.object({
	// Inherited attribute classes
	...AttrSpaceAnlCmnSchema.entries,
});

export type AttrSpaceAnlData = v.InferOutput<typeof AttrSpaceAnlSchema>;

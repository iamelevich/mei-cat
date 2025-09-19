import * as v from "valibot";
import { AttrJoinedSchema } from "../../shared/attr/joined";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slur.anl.html
 */
export const AttrSlurAnlSchema = v.object({
	// Inherited attribute classes
	...AttrJoinedSchema.entries,
});

export type AttrSlurAnlData = v.InferOutput<typeof AttrSlurAnlSchema>;

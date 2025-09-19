import * as v from "valibot";
import { AttrEventSchema } from "../../shared";
import { AttrNumberedSchema } from "..";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.log.html
 */
export const AttrMultiRestLogSchema = v.object({
	// Inherited attribute classes
	...AttrEventSchema.entries,
	...AttrNumberedSchema.entries,
});

export type AttrMultiRestLogData = v.InferOutput<typeof AttrMultiRestLogSchema>;

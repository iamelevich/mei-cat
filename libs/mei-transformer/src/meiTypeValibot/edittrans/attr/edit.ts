import * as v from "valibot";
import { AttrEvidenceSchema, AttrSourceSchema } from "../../shared";

/**
 * Attributes describing the nature of an encoded scholarly intervention or interpretation..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.edit.html
 */
export const AttrEditSchema = v.object({
	// Inherited attribute classes
	...AttrEvidenceSchema.entries,
	...AttrSourceSchema.entries,
});

export type AttrEditData = v.InferOutput<typeof AttrEditSchema>;

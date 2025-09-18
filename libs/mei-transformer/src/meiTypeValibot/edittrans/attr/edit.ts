import * as v from "valibot";
import { AttrEvidenceSchema, AttrSourceSchema } from "../../shared";

/**
 * Attributes that capture information about the nature of an encoded scholarly intervention or interpretation of any aspect of an item.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.edit.html
 */
export const AttrEditSchema = v.object({
	...AttrSourceSchema.entries,
	...AttrEvidenceSchema.entries,
});

export type AttrEditData = v.InferOutput<typeof AttrEditSchema>;

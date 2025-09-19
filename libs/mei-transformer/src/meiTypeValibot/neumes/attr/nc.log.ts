import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";
import { AttrLayerIdentSchema, AttrStaffIdentSchema } from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nc.log.html
 */
export const AttrNcLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrStaffIdentSchema.entries,

	// Direct attributes
	/**
	 * Captures written octave information.
	 */
	"@oct": v.optional(v.string()),
	/**
	 * Contains a written pitch name.
	 */
	"@pname": v.optional(v.string()),
});

export type AttrNcLogData = v.InferOutput<typeof AttrNcLogSchema>;

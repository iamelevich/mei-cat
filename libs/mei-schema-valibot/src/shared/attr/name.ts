import * as v from "valibot";
import { AttrAuthorizedSchema } from "./authorized";
import { AttrDatableSchema } from "./datable";
import { AttrFilingSchema } from "./filing";

/**
 * Attributes shared by names..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.name.html
 */
export const AttrNameSchema = v.object({
	// Inherited attribute classes
	...AttrAuthorizedSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFilingSchema.entries,

	// Direct attributes
	/**
	 * Used to record a pointer to the regularized form of the name elsewhere in the document.
	 */
	"@nymref": v.optional(v.string()),
	/**
	 * Used to specify further information about the entity referenced by this name, for example, the occupation of a person or the status of a place.
	 */
	"@role": v.optional(v.string()),
});

export type AttrNameData = v.InferOutput<typeof AttrNameSchema>;

import * as v from "valibot";
import { AttrIdSchema } from "./id";

/**
 * Attributes that form the basis of the att.common class..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
 */
export const AttrBasicSchema = v.object({
	// Inherited attribute classes
	...AttrIdSchema.entries,

	// Direct attributes
	/**
	 * Provides a base URI reference with which applications can resolve relative URI references into absolute URI references.
	 */
	"@base": v.optional(v.string()),
});

export type AttrBasicData = v.InferOutput<typeof AttrBasicSchema>;

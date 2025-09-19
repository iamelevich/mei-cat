import * as v from "valibot";

/**
 * Attributes that describe a performance resource as ad libitum (optional)..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.adlibitum.html
 */
export const AttrAdlibitumSchema = v.object({
	// Direct attributes
	/**
	 * Marks a performance resource as ad libitum (optional).
	 */
	"@adlib": v.optional(v.string()),
});

export type AttrAdlibitumData = v.InferOutput<typeof AttrAdlibitumSchema>;

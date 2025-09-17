import * as v from "valibot";

/**
 * Simplified common attributes for basic functionality.
 * This is a simplified version that includes the most commonly used attributes.
 */
export const AttrCommonSchema = v.object({
	/**
	 * Provides a base URI reference with which applications can resolve relative URI references into absolute URI references.
	 * Value conforms to data.URI.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.basic.html
	 */
	"@xml:base": v.optional(v.pipe(v.string(), v.url())),

	/**
	 * Provides a unique identifier for the element bearing the attribute.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.id.html
	 */
	"@xml:id": v.optional(v.string()),
});

export type AttrCommonData = v.InferOutput<typeof AttrCommonSchema>;

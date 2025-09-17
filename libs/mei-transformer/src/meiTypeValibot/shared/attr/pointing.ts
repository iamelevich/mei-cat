import * as v from "valibot";

/**
 * Attributes that specify element-to-element relationships.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
 */
export const AttrPointingSchema = v.object({
	/**
	 * Identifies passive participants in a relationship; that is, the entities pointed "to".
	 * One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.URI.html
	 */
	"@target": v.optional(v.string()),
	/**
	 * Characterization of target resource(s) using any convenient classification scheme or typology.
	 * Value is a NMTOKEN.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
	 */
	"@targettype": v.optional(v.string()),
	/**
	 * Defines whether a link occurs automatically or must be requested by the user.
	 * Allowed values are: `onLoad`, `onRequest`, `none`, `other`
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 */
	"@xlink:actuate": v.optional(
		v.union([
			v.literal("onLoad"),
			v.literal("onRequest"),
			v.literal("none"),
			v.literal("other"),
		]),
	),
	/**
	 * Characterization of the relationship between resources. The value of the role attribute must be a URI.
	 * Value conforms to data.URI.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.URI.html
	 */
	"@xlink:role": v.optional(v.string()),
	/**
	 * Defines how a remote resource is rendered.
	 * Allowed values are: `new`, `replace`, `embed`, `none`, `other`
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 */
	"@xlink:show": v.optional(
		v.union([
			v.literal("new"),
			v.literal("replace"),
			v.literal("embed"),
			v.literal("none"),
			v.literal("other"),
		]),
	),
});

export type AttrPointingData = v.InferOutput<typeof AttrPointingSchema>;

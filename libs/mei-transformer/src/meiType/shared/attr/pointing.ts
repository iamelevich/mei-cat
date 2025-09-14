import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that specify element-to-element relationships.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
 */
export const AttrPointingSchema = Type.Object({
	/**
	 * Identifies passive participants in a relationship; that is, the entities pointed "to".
	 * One or more values from data.URI, separated by spaces.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.URI.html
	 */
	"@target": Type.Optional(Type.String()),
	/**
	 * Characterization of target resource(s) using any convenient classification scheme or typology.
	 * Value is a NMTOKEN.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 * @see https://www.w3.org/TR/xmlschema11-2/#NMTOKEN
	 */
	"@targettype": Type.Optional(Type.String()),
	/**
	 * Defines whether a link occurs automatically or must be requested by the user.
	 * Allowed values are: `onLoad`, `onRequest`, `none`, `other`
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 */
	"@xlink:actuate": Type.Optional(
		Type.Union([
			Type.Literal("onLoad"),
			Type.Literal("onRequest"),
			Type.Literal("none"),
			Type.Literal("other"),
		]),
	),
	/**
	 * Characterization of the relationship between resources. The value of the role attribute must be a URI.
	 * Value conforms to data.URI.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 * @see https://music-encoding.org/guidelines/v5/data-types/data.URI.html
	 */
	"@xlink:role": Type.Optional(Type.String()),
	/**
	 * Defines how a remote resource is rendered.
	 * Allowed values are: `new`, `replace`, `embed`, `none`, `other`
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
	 */
	"@xlink:show": Type.Optional(
		Type.Union([
			Type.Literal("new"),
			Type.Literal("replace"),
			Type.Literal("embed"),
			Type.Literal("none"),
			Type.Literal("other"),
		]),
	),
});

export type AttrPointing = Static<typeof AttrPointingSchema>;

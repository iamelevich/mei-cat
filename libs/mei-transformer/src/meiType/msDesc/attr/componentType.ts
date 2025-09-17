import { Type } from "typebox";

/**
 * att.componentType — Attributes for denoting component type of an entity.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.componentType.html
 */
export const AttrComponentTypeSchema = Type.Object(
	{
		/**
		 * Characterizes how this entity relates to the larger object of which it is a part.
		 * Allowed values: "constituent", "boundwith", "separated".
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.componentType.html#comptype
		 */
		"@comptype": Type.Optional(
			Type.Union([
				Type.Literal("constituent"),
				Type.Literal("boundwith"),
				Type.Literal("separated"),
				Type.String(),
			]),
		),
	},
	{ additionalProperties: false },
);

import * as v from "valibot";

/**
 * att.componentType — Attributes for denoting component type of an entity.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.componentType.html
 */
export const AttrComponentTypeSchema = v.object({
	/**
	 * Characterizes how this entity relates to the larger object of which it is a part.
	 * Allowed values: "constituent", "boundwith", "separated".
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.componentType.html#comptype
	 */
	"@comptype": v.optional(
		v.union([
			v.literal("constituent"),
			v.literal("boundwith"),
			v.literal("separated"),
			v.string(),
		]),
	),
});

export type AttrComponentTypeData = v.InferOutput<typeof AttrComponentTypeSchema>;

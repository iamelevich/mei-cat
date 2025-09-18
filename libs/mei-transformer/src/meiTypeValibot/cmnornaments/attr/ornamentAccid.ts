import * as v from "valibot";

/**
 * Attributes for ornamentAccid.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornamentAccid.html
 */
export const AttrOrnamentAccidSchema = v.object({
	// TODO: Add ornamentAccid attributes
});

export type AttrOrnamentAccidData = v.InferOutput<
	typeof AttrOrnamentAccidSchema
>;

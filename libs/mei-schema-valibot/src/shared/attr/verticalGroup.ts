import * as v from "valibot";

/**
 * Attributes that record grouping of vertically aligned elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verticalGroup.html
 */
export const AttrVerticalGroupSchema = v.object({
	// Direct attributes
	/**
	 * Provides a label for members of a vertically aligned group.
	 */
	"@vgrp": v.optional(v.string()),
});

export type AttrVerticalGroupData = v.InferOutput<
	typeof AttrVerticalGroupSchema
>;

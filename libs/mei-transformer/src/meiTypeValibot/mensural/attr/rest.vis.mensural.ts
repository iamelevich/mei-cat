import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.vis.mensural.html
 */
export const AttrRestVisMensuralSchema = v.object({
	// Direct attributes
	/**
	 * States how many spaces are covered by the rest.
	 */
	"@spaces": v.optional(v.string()),
});

export type AttrRestVisMensuralData = v.InferOutput<
	typeof AttrRestVisMensuralSchema
>;

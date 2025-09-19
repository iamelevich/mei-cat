import * as v from "valibot";
import { AttrCutoutSchema } from "../../cmn";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.vis.html
 */
export const AttrSpaceVisSchema = v.object({
	// Inherited attribute classes
	...AttrCutoutSchema.entries,

	// Direct attributes
	/**
	 * Indicates whether a space is 'compressible', <abbr>i.e.</abbr>, if it may be removed at the discretion of processing software.
	 */
	"@compressable": v.optional(v.string()),
});

export type AttrSpaceVisData = v.InferOutput<typeof AttrSpaceVisSchema>;

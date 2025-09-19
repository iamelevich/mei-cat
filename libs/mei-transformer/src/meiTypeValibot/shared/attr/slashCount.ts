import * as v from "valibot";

/**
 * Attributes for recording the number of slashes that accompany a feature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slashCount.html
 */
export const AttrSlashCountSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the number of slashes present.
	 */
	"@slash": v.optional(v.string()),
});

export type AttrSlashCountData = v.InferOutput<typeof AttrSlashCountSchema>;

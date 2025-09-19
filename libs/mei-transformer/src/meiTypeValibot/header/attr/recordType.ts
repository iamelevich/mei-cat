import * as v from "valibot";

/**
 * Attributes that define the characteristics and components of the bibliographic description..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.recordType.html
 */
export const AttrRecordTypeSchema = v.object({
	// Direct attributes
	/**
	 * Language material.
	 */
	"@recordtype": v.optional(v.string()),
});

export type AttrRecordTypeData = v.InferOutput<typeof AttrRecordTypeSchema>;

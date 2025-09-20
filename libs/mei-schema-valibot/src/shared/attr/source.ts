import * as v from "valibot";

/**
 * Attributes common to elements that may refer to a source..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.source.html
 */
export const AttrSourceSchema = v.object({
	// Direct attributes
	/**
	 * Contains a list of one or more pointers indicating the sources which attest to a given reading. Each value should correspond to the ID of a <gi scheme="MEI">source</gi> or <gi scheme="MEI">manifestation</gi>element located in the document header.
	 */
	"@source": v.optional(v.string()),
});

export type AttrSourceData = v.InferOutput<typeof AttrSourceSchema>;

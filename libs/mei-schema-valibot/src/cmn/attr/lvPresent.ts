import * as v from "valibot";

/**
 * Attributes that indicate the presence of an l.v. (laissez vibrer) marking attached to a feature. If visual information about the lv sign needs to be recorded, then an <gi scheme="MEI">lv</gi> element should be employed..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lvPresent.html
 */
export const AttrLvPresentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the attachment of an l.v. (laissez vibrer) sign to this element.
	 */
	"@lv": v.optional(v.string()),
});

export type AttrLvPresentData = v.InferOutput<typeof AttrLvPresentSchema>;

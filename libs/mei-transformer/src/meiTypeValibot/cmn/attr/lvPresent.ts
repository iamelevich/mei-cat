import * as v from "valibot";

/**
 * Attributes for lvPresent.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lvPresent.html
 */
export const AttrLvPresentSchema = v.object({
	/**
	 * Indicates the attachment of an l.v. (laissez vibrer) sign to this element.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lvPresent.html#lv
	 */
	"@lv": v.optional(v.union([v.literal("true"), v.literal("false")])),
});

export type AttrLvPresentData = v.InferOutput<typeof AttrLvPresentSchema>;

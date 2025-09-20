import * as v from "valibot";

/**
 * Attributes that indicate the calendar system of a date or other datable element..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.calendared.html
 */
export const AttrCalendaredSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the calendar system to which a date belongs, for example, Gregorian, Julian, Roman, Mosaic, Revolutionary, Islamic, etc.
	 */
	"@calendar": v.optional(v.string()),
});

export type AttrCalendaredData = v.InferOutput<typeof AttrCalendaredSchema>;

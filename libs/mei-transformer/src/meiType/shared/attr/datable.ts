import { Type } from "typebox";

/**
 * Attributes common to dates.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html
 */
export const AttrDatableSchema = Type.Object(
	{
		/**
		 * Contains the end point of a date range in standard ISO form.
		 * Value conforms to data.ISODATE.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.ISODATE.html
		 */
		"@enddate": Type.Optional(Type.String({ format: "date-time" })),
		/**
		 * Provides the value of a textual date in standard ISO form.
		 * Value conforms to data.ISODATE.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.ISODATE.html
		 */
		"@isodate": Type.Optional(Type.String({ format: "date-time" })),
		/**
		 * Contains an upper boundary for an uncertain date in standard ISO form.
		 * Value conforms to data.ISODATE.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.ISODATE.html
		 */
		"@notafter": Type.Optional(Type.String({ format: "date-time" })),
		/**
		 * Contains a lower boundary, in standard ISO form, for an uncertain date.
		 * Value conforms to data.ISODATE.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.ISODATE.html
		 */
		"@notbefore": Type.Optional(Type.String({ format: "date-time" })),
		/**
		 * Contains the starting point of a date range in standard ISO form.
		 * Value conforms to data.ISODATE.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.ISODATE.html
		 */
		"@startdate": Type.Optional(Type.String({ format: "date-time" })),
	},
	{ additionalProperties: false },
);

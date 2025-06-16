import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that describe correction and normalization methods.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.regularMethod.html
 */
export const AttrRegularMethodSchema = Type.Object({
	/**
	 * Indicates the method employed to mark corrections and normalizations.
	 * Allowed values are:
	 *   "silent" (Corrections and normalizations made silently.),
	 *   "tags" (Corrections and normalizations indicated using elements.)
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.regularMethod.html
	 */
	"@method": Type.Optional(
		Type.Union([Type.Literal("silent"), Type.Literal("tags")]),
	),
});

export type AttrRegularMethod = Static<typeof AttrRegularMethodSchema>;

import { type Static, Type } from "@sinclair/typebox";

/**
 * Indicates the method employed to mark corrections and normalizations.
 * @see https://music-encoding.org/guidelines/v5/elements/correction.html#method
 */
export const AttrRegularMethodSchema = Type.Object({
	/**
	 * Indicates the method employed to mark corrections and normalizations.
	 * @see https://music-encoding.org/guidelines/v5/elements/correction.html#method
	 */
	"@method": Type.Optional(
		Type.Union([Type.Literal("silent"), Type.Literal("tags")]),
	),
});

export type AttrRegularMethod = Static<typeof AttrRegularMethodSchema>;

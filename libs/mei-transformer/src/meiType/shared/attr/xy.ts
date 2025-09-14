import { type Static, Type } from "@sinclair/typebox";

/**
 * XY coordinate attributes for positioning features.
 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html#xy
 */
export const AttrXySchema = Type.Object({
	/**
	 * Encodes an x coordinate for a feature in an output coordinate system. When it is necessary to record the placement of a feature in a facsimile image, use the facs attribute.
	 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html#x
	 */
	"@x": Type.Optional(Type.Number()),
	/**
	 * Encodes a y coordinate for a feature in an output coordinate system. When it is necessary to record the placement of a feature in a facsimile image, use the facs attribute.
	 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html#y
	 */
	"@y": Type.Optional(Type.Number()),
});

export type AttrXy = Static<typeof AttrXySchema>;

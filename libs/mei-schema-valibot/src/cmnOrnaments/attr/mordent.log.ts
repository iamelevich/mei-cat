import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrStartEndIdSchema } from "../../shared/attr/startEndId";
import { AttrOrnamentAccidSchema } from "./ornamentAccid";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mordent.log.html
 */
export const AttrMordentLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrOrnamentAccidSchema.entries,
	...AttrStartEndIdSchema.entries,

	// Direct attributes
	/**
	 * Records semantic meaning, <abbr>i.e.</abbr>, intended performance, of the mordent. The <att>altsym</att>, <att>glyph.name</att>, or <att>glyph.num</att> attributes may be used to specify the appropriate symbol.
	 */
	"@form": v.optional(v.string()),
	/**
	 * When set to 'true', a double or long mordent, sometimes called a "pincé double", consisting of 5 notes, is indicated.
	 */
	"@long": v.optional(v.string()),
});

export type AttrMordentLogData = v.InferOutput<typeof AttrMordentLogSchema>;

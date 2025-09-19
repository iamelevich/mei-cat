import * as v from "valibot";
import { AttrControlEventSchema } from "../../shared/attr/controlEvent";
import { AttrStartIdSchema } from "../../shared/attr/startId";
import { AttrOrnamentAccidSchema } from "../attr/ornamentAccid";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.turn.log.html
 */
export const AttrTurnLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrOrnamentAccidSchema.entries,
	...AttrStartIdSchema.entries,

	// Direct attributes
	/**
	 * When set to 'true', the turn begins on the second half of the beat.
	 */
	"@delayed": v.optional(v.string()),
	/**
	 * Records meaning; <abbr>i.e.</abbr>, intended performance, of the turn. The <att>altsym</att>, <att>glyph.name</att>, or <att>glyph.num</att> attributes may be used to specify the appropriate symbol.
	 */
	"@form": v.optional(v.string()),
});

export type AttrTurnLogData = v.InferOutput<typeof AttrTurnLogSchema>;

import * as v from "valibot";
import { AttrOrnamentAccidGesSchema } from "../../gestural";

/**
 * Accidentals associated with ornaments..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornamentAccid.html
 */
export const AttrOrnamentAccidSchema = v.object({
	// Inherited attribute classes
	...AttrOrnamentAccidGesSchema.entries,

	// Direct attributes
	/**
	 * Records the written accidental associated with a lower neighboring note.
	 */
	"@accidlower": v.optional(v.string()),
	/**
	 * Records the written accidental associated with an upper neighboring note.
	 */
	"@accidupper": v.optional(v.string()),
});

export type AttrOrnamentAccidData = v.InferOutput<
	typeof AttrOrnamentAccidSchema
>;

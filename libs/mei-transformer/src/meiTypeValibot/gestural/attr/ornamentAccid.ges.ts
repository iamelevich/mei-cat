import * as v from "valibot";

/**
 * Gestural accidentals associated with ornaments..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornamentAccid.ges.html
 */
export const AttrOrnamentAccidGesSchema = v.object({
	// Direct attributes
	/**
	 * Records the sounding accidental associated with a lower neighboring note.
	 */
	"@accidlower.ges": v.optional(v.string()),
	/**
	 * Records the sounding accidental associated with an upper neighboring note.
	 */
	"@accidupper.ges": v.optional(v.string()),
});

export type AttrOrnamentAccidGesData = v.InferOutput<
	typeof AttrOrnamentAccidGesSchema
>;

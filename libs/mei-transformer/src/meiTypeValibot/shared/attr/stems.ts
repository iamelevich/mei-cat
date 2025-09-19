import * as v from "valibot";
import { AttrStemsCmnSchema } from "../../cmn";
import { AttrStemsMensuralSchema } from "../../mensural";

/**
 * Attributes that describe the properties of stemmed features; that is, chords and notes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stems.html
 */
export const AttrStemsSchema = v.object({
	// Inherited attribute classes
	...AttrStemsCmnSchema.entries,
	...AttrStemsMensuralSchema.entries,

	// Direct attributes
	/**
	 * Describes the direction of a stem.
	 */
	"@stem.dir": v.optional(v.string()),
	/**
	 * Encodes the stem length.
	 */
	"@stem.len": v.optional(v.string()),
	/**
	 * Encodes any stem "modifiers"; that is, symbols rendered on the stem, such as tremolo or Sprechstimme indicators.
	 */
	"@stem.mod": v.optional(v.string()),
	/**
	 * Records the position of the stem in relation to the note head(s).
	 */
	"@stem.pos": v.optional(v.string()),
	/**
	 * Points to a note element in a different layer whose stem is shared. The linked notes should be rendered like a chord though they are part of different layers.
	 */
	"@stem.sameas": v.optional(v.string()),
	/**
	 * Determines whether a stem should be displayed.
	 */
	"@stem.visible": v.optional(v.string()),
	/**
	 * Records the output x coordinate of the stem’s attachment point.
	 */
	"@stem.x": v.optional(v.string()),
	/**
	 * Records the output y coordinate of the stem’s attachment point.
	 */
	"@stem.y": v.optional(v.string()),
});

export type AttrStemsData = v.InferOutput<typeof AttrStemsSchema>;

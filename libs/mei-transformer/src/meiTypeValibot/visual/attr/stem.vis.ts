import * as v from "valibot";
import {
	AttrColorSchema,
	AttrVisibilitySchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes that describe the properties of a stem in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stem.vis.html
 */
export const AttrStemVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Describes the direction of a stem.
	 */
	"@dir": v.optional(v.string()),
	/**
	 * Encodes the form of the flag using the values provided by the data.FLAGFORM.mensural datatype.
	 */
	"@flag.form": v.optional(v.string()),
	/**
	 * Records the position of the flag using the values provided by the data.FLAGPOS.mensural datatype.
	 */
	"@flag.pos": v.optional(v.string()),
	/**
	 * Encodes the form of the stem using the values provided by the data.STEMFORM.mensural datatype.
	 */
	"@form": v.optional(v.string()),
	/**
	 * Encodes the stem length.
	 */
	"@len": v.optional(v.string()),
	/**
	 * Records the position of the stem in relation to the note head(s).
	 */
	"@pos": v.optional(v.string()),
});

export type AttrStemVisData = v.InferOutput<typeof AttrStemVisSchema>;

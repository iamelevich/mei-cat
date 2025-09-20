import * as v from "valibot";
import { AttrMensuralSharedSchema } from "./mensural.shared";

/**
 * Used by staffDef and scoreDef to provide default values for attributes in the logical domain related to mensuration. The tempus, prolatio, modusmaior, and modusminor attributes (from the att.mensural.shared class) specify the relationship between the four principle levels of note value, <abbr>i.e.</abbr>, the long, breve, semibreve and minim, in mensural notation. Modusminor describes the long-breve relationship, while tempus describes the breve-semibreve, and prolatio the semibreve-minim relationship, respectively. Modusmaior is for the maxima-long relationship. The proport.* attributes describe augmentation or diminution of the normal value of the notes in mensural notation..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensural.log.html
 */
export const AttrMensuralLogSchema = v.object({
	// Inherited attribute classes
	...AttrMensuralSharedSchema.entries,

	// Direct attributes
	/**
	 * Together, proport.num and proport.numbase specify a proportional change as a ratio, <abbr>e.g.</abbr>, 1:3. Proport.num is for the first value in the ratio.
	 */
	"@proport.num": v.optional(v.string()),
	/**
	 * Together, proport.num and proport.numbase specify a proportional change as a ratio, <abbr>e.g.</abbr>, 1:3. Proport.numbase is for the second value in the ratio.
	 */
	"@proport.numbase": v.optional(v.string()),
});

export type AttrMensuralLogData = v.InferOutput<typeof AttrMensuralLogSchema>;

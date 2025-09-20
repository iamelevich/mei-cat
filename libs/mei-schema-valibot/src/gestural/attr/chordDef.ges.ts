import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordDef.ges.html
 */
export const AttrChordDefGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrChordDefGesData = v.InferOutput<typeof AttrChordDefGesSchema>;

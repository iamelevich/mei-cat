import * as v from "valibot";

/**
 * Attributes which identify a MIDI instrument..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrumentIdent.html
 */
export const AttrInstrumentIdentSchema = v.object({
	// Direct attributes
	/**
	 * Provides a way of pointing to a MIDI instrument definition. It must contain the ID of an <gi scheme="MEI">instrDef</gi> element elsewhere in the document.
	 */
	"@instr": v.optional(v.string()),
});

export type AttrInstrumentIdentData = v.InferOutput<
	typeof AttrInstrumentIdentSchema
>;

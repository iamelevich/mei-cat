import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrDef.log.html
 */
export const AttrInstrDefLogSchema = v.object({
	// No attributes in MEI schema
});

export type AttrInstrDefLogData = v.InferOutput<typeof AttrInstrDefLogSchema>;

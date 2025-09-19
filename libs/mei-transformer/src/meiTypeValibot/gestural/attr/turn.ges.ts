import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.turn.ges.html
 */
export const AttrTurnGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTurnGesData = v.InferOutput<typeof AttrTurnGesSchema>;

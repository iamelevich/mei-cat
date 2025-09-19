import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.turn.anl.html
 */
export const AttrTurnAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrTurnAnlData = v.InferOutput<typeof AttrTurnAnlSchema>;

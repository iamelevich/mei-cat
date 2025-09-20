import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stageDir.anl.html
 */
export const AttrStageDirAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrStageDirAnlData = v.InferOutput<typeof AttrStageDirAnlSchema>;

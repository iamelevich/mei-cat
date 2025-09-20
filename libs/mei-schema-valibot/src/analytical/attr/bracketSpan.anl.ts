import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.anl.html
 */
export const AttrBracketSpanAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrBracketSpanAnlData = v.InferOutput<
	typeof AttrBracketSpanAnlSchema
>;

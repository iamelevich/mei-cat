import * as v from "valibot";

/**
 * Attributes for bracketSpan.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.anl.html
 */
export const AttrBracketSpanAnlSchema = v.object({
  // TODO: Add bracketSpan.anl attributes
});

export type AttrBracketSpanAnlData = v.InferOutput<typeof AttrBracketSpanAnlSchema>;

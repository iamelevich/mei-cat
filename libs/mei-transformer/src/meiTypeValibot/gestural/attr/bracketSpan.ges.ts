import * as v from "valibot";

/**
 * Attributes for bracketSpan.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.ges.html
 */
export const AttrBracketSpanGesSchema = v.object({
  // TODO: Add bracketSpan.ges attributes
});

export type AttrBracketSpanGesData = v.InferOutput<typeof AttrBracketSpanGesSchema>;

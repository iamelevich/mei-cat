import * as v from "valibot";

/**
 * Attributes for bracketSpan.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.vis.html
 */
export const AttrBracketSpanVisSchema = v.object({
  // TODO: Add bracketSpan.vis attributes
});

export type AttrBracketSpanVisData = v.InferOutput<typeof AttrBracketSpanVisSchema>;

import * as v from "valibot";

/**
 * Attributes for bracketSpan.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.log.html
 */
export const AttrBracketSpanLogSchema = v.object({
  // TODO: Add bracketSpan.log attributes
});

export type AttrBracketSpanLogData = v.InferOutput<typeof AttrBracketSpanLogSchema>;

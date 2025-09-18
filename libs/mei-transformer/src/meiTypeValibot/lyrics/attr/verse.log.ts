import * as v from "valibot";

/**
 * Attributes for verse.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verse.log.html
 */
export const AttrVerseLogSchema = v.object({
  // TODO: Add verse.log attributes
});

export type AttrVerseLogData = v.InferOutput<typeof AttrVerseLogSchema>;

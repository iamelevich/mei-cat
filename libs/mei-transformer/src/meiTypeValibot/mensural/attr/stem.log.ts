import * as v from "valibot";

/**
 * Attributes for stem.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stem.log.html
 */
export const AttrStemLogSchema = v.object({
  // TODO: Add stem.log attributes
});

export type AttrStemLogData = v.InferOutput<typeof AttrStemLogSchema>;

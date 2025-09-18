import * as v from "valibot";

/**
 * Attributes for phrase logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.phrase.log.html
 */
export const AttrPhraseLogSchema = v.object({
  // TODO: Add phrase logging attributes
});

export type AttrPhraseLogData = v.InferOutput<typeof AttrPhraseLogSchema>;

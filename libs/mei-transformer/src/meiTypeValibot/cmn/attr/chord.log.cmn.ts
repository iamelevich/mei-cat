import * as v from "valibot";

/**
 * Attributes for chord.log.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.log.cmn.html
 */
export const AttrChordLogCmnSchema = v.object({
  // TODO: Add chord.log.cmn attributes
});

export type AttrChordLogCmnData = v.InferOutput<typeof AttrChordLogCmnSchema>;

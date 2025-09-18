import * as v from "valibot";

/**
 * Attributes for chord.anl.cmn.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.anl.cmn.html
 */
export const AttrChordAnlCmnSchema = v.object({
  // TODO: Add chord.anl.cmn attributes
});

export type AttrChordAnlCmnData = v.InferOutput<typeof AttrChordAnlCmnSchema>;

import * as v from "valibot";

/**
 * Attributes for chord.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.anl.html
 */
export const AttrChordAnlSchema = v.object({
  // TODO: Add chord.anl attributes
});

export type AttrChordAnlData = v.InferOutput<typeof AttrChordAnlSchema>;

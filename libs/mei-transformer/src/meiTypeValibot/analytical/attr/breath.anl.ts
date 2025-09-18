import * as v from "valibot";

/**
 * Attributes for breath.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.breath.anl.html
 */
export const AttrBreathAnlSchema = v.object({
  // TODO: Add breath.anl attributes
});

export type AttrBreathAnlData = v.InferOutput<typeof AttrBreathAnlSchema>;

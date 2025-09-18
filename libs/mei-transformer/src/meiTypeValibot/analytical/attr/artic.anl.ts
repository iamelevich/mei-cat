import * as v from "valibot";

/**
 * Attributes for artic.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.artic.anl.html
 */
export const AttrArticAnlSchema = v.object({
  // TODO: Add artic.anl attributes
});

export type AttrArticAnlData = v.InferOutput<typeof AttrArticAnlSchema>;

import * as v from "valibot";

/**
 * Attributes for reh.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.anl.html
 */
export const AttrRehAnlSchema = v.object({
  // TODO: Add reh.anl attributes
});

export type AttrRehAnlData = v.InferOutput<typeof AttrRehAnlSchema>;

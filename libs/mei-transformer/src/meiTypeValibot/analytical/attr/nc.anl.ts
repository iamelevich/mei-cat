import * as v from "valibot";

/**
 * Attributes for nc.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nc.anl.html
 */
export const AttrNcAnlSchema = v.object({
  // TODO: Add nc.anl attributes
});

export type AttrNcAnlData = v.InferOutput<typeof AttrNcAnlSchema>;

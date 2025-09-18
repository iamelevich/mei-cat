import * as v from "valibot";

/**
 * Attributes for proport.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.proport.anl.html
 */
export const AttrProportAnlSchema = v.object({
  // TODO: Add proport.anl attributes
});

export type AttrProportAnlData = v.InferOutput<typeof AttrProportAnlSchema>;

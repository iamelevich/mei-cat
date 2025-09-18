import * as v from "valibot";

/**
 * Attributes for volta.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.volta.anl.html
 */
export const AttrVoltaAnlSchema = v.object({
  // TODO: Add volta.anl attributes
});

export type AttrVoltaAnlData = v.InferOutput<typeof AttrVoltaAnlSchema>;

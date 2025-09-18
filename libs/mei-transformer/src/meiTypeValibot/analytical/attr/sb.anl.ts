import * as v from "valibot";

/**
 * Attributes for sb.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sb.anl.html
 */
export const AttrSbAnlSchema = v.object({
  // TODO: Add sb.anl attributes
});

export type AttrSbAnlData = v.InferOutput<typeof AttrSbAnlSchema>;

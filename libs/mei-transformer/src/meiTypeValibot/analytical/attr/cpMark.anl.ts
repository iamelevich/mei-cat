import * as v from "valibot";

/**
 * Attributes for cpMark.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cpMark.anl.html
 */
export const AttrCpMarkAnlSchema = v.object({
  // TODO: Add cpMark.anl attributes
});

export type AttrCpMarkAnlData = v.InferOutput<typeof AttrCpMarkAnlSchema>;

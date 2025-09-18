import * as v from "valibot";

/**
 * Attributes for mSpace.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.anl.html
 */
export const AttrMSpaceAnlSchema = v.object({
  // TODO: Add mSpace.anl attributes
});

export type AttrMSpaceAnlData = v.InferOutput<typeof AttrMSpaceAnlSchema>;

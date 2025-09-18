import * as v from "valibot";

/**
 * Attributes for pb.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pb.anl.html
 */
export const AttrPbAnlSchema = v.object({
  // TODO: Add pb.anl attributes
});

export type AttrPbAnlData = v.InferOutput<typeof AttrPbAnlSchema>;

import * as v from "valibot";

/**
 * Attributes for timeBase.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timeBase.html
 */
export const AttrTimeBaseSchema = v.object({
  // TODO: Add timeBase attributes
});

export type AttrTimeBaseData = v.InferOutput<typeof AttrTimeBaseSchema>;

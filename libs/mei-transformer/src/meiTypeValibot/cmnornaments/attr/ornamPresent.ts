import * as v from "valibot";

/**
 * Attributes for ornamPresent.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornamPresent.html
 */
export const AttrOrnamPresentSchema = v.object({
  // TODO: Add ornamPresent attributes
});

export type AttrOrnamPresentData = v.InferOutput<typeof AttrOrnamPresentSchema>;

import * as v from "valibot";

/**
 * Attributes for data selecting.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dataSelecting.html
 */
export const AttrDataSelectingSchema = v.object({
  // TODO: Add data selecting attributes
});

export type AttrDataSelectingData = v.InferOutput<typeof AttrDataSelectingSchema>;

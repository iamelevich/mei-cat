import * as v from "valibot";

/**
 * Attributes for key mode.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyMode.html
 */
export const AttrKeyModeSchema = v.object({
  // TODO: Add key mode attributes
});

export type AttrKeyModeData = v.InferOutput<typeof AttrKeyModeSchema>;

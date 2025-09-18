import * as v from "valibot";

/**
 * Attributes for ad libitum.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.adlibitum.html
 */
export const AttrAdlibitumSchema = v.object({
  // TODO: Add ad libitum attributes
});

export type AttrAdlibitumData = v.InferOutput<typeof AttrAdlibitumSchema>;

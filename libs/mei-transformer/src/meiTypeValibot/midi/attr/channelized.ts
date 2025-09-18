import * as v from "valibot";

/**
 * Attributes for channelized.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.channelized.html
 */
export const AttrChannelizedSchema = v.object({
  // TODO: Add channelized attributes
});

export type AttrChannelizedData = v.InferOutput<typeof AttrChannelizedSchema>;

import * as v from "valibot";

/**
 * Attributes for metadata pointing.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metadataPointing.html
 */
export const AttrMetadataPointingSchema = v.object({
  // TODO: Add metadata pointing attributes
});

export type AttrMetadataPointingData = v.InferOutput<typeof AttrMetadataPointingSchema>;

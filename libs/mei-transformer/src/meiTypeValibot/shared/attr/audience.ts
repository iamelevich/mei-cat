import * as v from "valibot";

/**
 * Attributes for audience.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.audience.html
 */
export const AttrAudienceSchema = v.object({
  // TODO: Add audience attributes
});

export type AttrAudienceData = v.InferOutput<typeof AttrAudienceSchema>;

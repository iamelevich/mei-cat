import * as v from "valibot";

/**
 * Attributes for cue elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cue.html
 */
export const AttrCueSchema = v.object({
  // TODO: Add cue attributes
});

export type AttrCueData = v.InferOutput<typeof AttrCueSchema>;

import * as v from "valibot";

/**
 * Attributes for MEI version.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
 */
export const AttrMeiVersionSchema = v.object({
  // TODO: Add MEI version attributes
});

export type AttrMeiVersionData = v.InferOutput<typeof AttrMeiVersionSchema>;

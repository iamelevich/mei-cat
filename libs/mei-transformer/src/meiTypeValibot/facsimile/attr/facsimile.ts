import * as v from "valibot";

/**
 * Attributes for facsimile elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
 */
export const AttrFacsimileSchema = v.object({
  // TODO: Add facsimile attributes
});

export type AttrFacsimileData = v.InferOutput<typeof AttrFacsimileSchema>;

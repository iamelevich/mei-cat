import * as v from "valibot";

/**
 * Attributes for enclosing characters.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.enclosingChars.html
 */
export const AttrEnclosingCharsSchema = v.object({
  // TODO: Add enclosing characters attributes
});

export type AttrEnclosingCharsData = v.InferOutput<typeof AttrEnclosingCharsSchema>;

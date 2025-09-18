import * as v from "valibot";

/**
 * Attributes for extSym.names.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extSym.names.html
 */
export const AttrExtSymNamesSchema = v.object({
  // TODO: Add extSym.names attributes
});

export type AttrExtSymNamesData = v.InferOutput<typeof AttrExtSymNamesSchema>;

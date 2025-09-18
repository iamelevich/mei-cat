import * as v from "valibot";

/**
 * Attributes for extSym.auth.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extSym.auth.html
 */
export const AttrExtSymAuthSchema = v.object({
  // TODO: Add extSym.auth attributes
});

export type AttrExtSymAuthData = v.InferOutput<typeof AttrExtSymAuthSchema>;

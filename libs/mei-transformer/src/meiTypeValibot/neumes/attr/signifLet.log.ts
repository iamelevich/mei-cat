import * as v from "valibot";

/**
 * Attributes for signifLet.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.signifLet.log.html
 */
export const AttrSignifLetLogSchema = v.object({
  // TODO: Add signifLet.log attributes
});

export type AttrSignifLetLogData = v.InferOutput<typeof AttrSignifLetLogSchema>;

import * as v from "valibot";

/**
 * Attributes for custos logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.custos.log.html
 */
export const AttrCustosLogSchema = v.object({
  // TODO: Add custos logging attributes
});

export type AttrCustosLogData = v.InferOutput<typeof AttrCustosLogSchema>;

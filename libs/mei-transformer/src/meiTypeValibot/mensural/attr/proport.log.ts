import * as v from "valibot";

/**
 * Attributes for proport.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.proport.log.html
 */
export const AttrProportLogSchema = v.object({
  // TODO: Add proport.log attributes
});

export type AttrProportLogData = v.InferOutput<typeof AttrProportLogSchema>;

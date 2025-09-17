import * as v from "valibot";

/**
 * Attributes for copyist's mark logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cpMark.log.html
 */
export const AttrCpMarkLogSchema = v.object({
  // TODO: Add cpMark.log attributes
});

export type AttrCpMarkLogData = v.InferOutput<typeof AttrCpMarkLogSchema>;

import * as v from "valibot";

/**
 * Attributes for ambitus logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ambitus.log.html
 */
export const AttrAmbitusLogSchema = v.object({
  // TODO: Add ambitus logging attributes
});

export type AttrAmbitusLogData = v.InferOutput<typeof AttrAmbitusLogSchema>;

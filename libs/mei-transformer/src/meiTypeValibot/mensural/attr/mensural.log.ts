import * as v from "valibot";

/**
 * Attributes for mensural.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensural.log.html
 */
export const AttrMensuralLogSchema = v.object({
  // TODO: Add mensural.log attributes
});

export type AttrMensuralLogData = v.InferOutput<typeof AttrMensuralLogSchema>;

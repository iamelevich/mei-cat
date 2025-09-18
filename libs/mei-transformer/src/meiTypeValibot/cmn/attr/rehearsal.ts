import * as v from "valibot";

/**
 * Attributes for rehearsal.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rehearsal.html
 */
export const AttrRehearsalSchema = v.object({
  // TODO: Add rehearsal attributes
});

export type AttrRehearsalData = v.InferOutput<typeof AttrRehearsalSchema>;

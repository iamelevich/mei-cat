import * as v from "valibot";

/**
 * Attributes for turn.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.turn.ges.html
 */
export const AttrTurnGesSchema = v.object({
  // TODO: Add turn.ges attributes
});

export type AttrTurnGesData = v.InferOutput<typeof AttrTurnGesSchema>;

import * as v from "valibot";

/**
 * Attributes for turn.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.turn.log.html
 */
export const AttrTurnLogSchema = v.object({
  // TODO: Add turn.log attributes
});

export type AttrTurnLogData = v.InferOutput<typeof AttrTurnLogSchema>;

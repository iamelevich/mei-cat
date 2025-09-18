import * as v from "valibot";

/**
 * Attributes for turn.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.turn.vis.html
 */
export const AttrTurnVisSchema = v.object({
  // TODO: Add turn.vis attributes
});

export type AttrTurnVisData = v.InferOutput<typeof AttrTurnVisSchema>;

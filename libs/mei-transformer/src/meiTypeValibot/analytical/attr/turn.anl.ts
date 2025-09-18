import * as v from "valibot";

/**
 * Attributes for turn.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.turn.anl.html
 */
export const AttrTurnAnlSchema = v.object({
  // TODO: Add turn.anl attributes
});

export type AttrTurnAnlData = v.InferOutput<typeof AttrTurnAnlSchema>;

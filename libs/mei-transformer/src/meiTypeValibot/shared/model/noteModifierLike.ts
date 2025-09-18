import * as v from "valibot";

/**
 * Groups elements that represent note modifier-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.noteModifierLike.html
 */
export const NoteModifierLikeSchema = v.object({
  // TODO: Add note modifier-like elements
});

export type NoteModifierLikeData = v.InferOutput<typeof NoteModifierLikeSchema>;

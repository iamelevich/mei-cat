import * as v from "valibot";

/**
 * Macro group for music parts.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.musicPart.html
 */
export const MacroMusicPartSchema = v.object({
  // TODO: Add music part elements
});

export type MacroMusicPartData = v.InferOutput<typeof MacroMusicPartSchema>;

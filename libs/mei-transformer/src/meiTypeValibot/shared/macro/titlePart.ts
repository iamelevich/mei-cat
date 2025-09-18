import * as v from "valibot";

/**
 * Macro group for title parts.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.titlePart.html
 */
export const MacroTitlePartSchema = v.object({
  // TODO: Add title part elements
});

export type MacroTitlePartData = v.InferOutput<typeof MacroTitlePartSchema>;

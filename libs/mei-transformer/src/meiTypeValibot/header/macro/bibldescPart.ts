import * as v from "valibot";

/**
 * Macro group for bibliographic description parts.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.bibldescPart.html
 */
export const MacroBibldescPartSchema = v.object({
  // TODO: Add bibliographic description part elements
});

export type MacroBibldescPartData = v.InferOutput<typeof MacroBibldescPartSchema>;

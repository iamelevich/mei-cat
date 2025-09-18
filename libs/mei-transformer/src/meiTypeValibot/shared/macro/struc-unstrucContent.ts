import * as v from "valibot";

/**
 * Macro group for structured and unstructured content.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.struc-unstrucContent.html
 */
export const MacroStrucUnstrucContentSchema = v.object({
  // TODO: Add structured and unstructured content elements
});

export type MacroStrucUnstrucContentData = v.InferOutput<typeof MacroStrucUnstrucContentSchema>;

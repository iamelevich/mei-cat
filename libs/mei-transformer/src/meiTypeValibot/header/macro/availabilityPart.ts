import * as v from "valibot";

/**
 * Macro group for availability parts.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.availabilityPart.html
 */
export const MacroAvailabilityPartSchema = v.object({
  // TODO: Add availability part elements
});

export type MacroAvailabilityPartData = v.InferOutput<typeof MacroAvailabilityPartSchema>;

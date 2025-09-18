import * as v from "valibot";

/**
 * Groups elements that represent staffpart.mensural parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffPart.mensural.html
 */
export const StaffPartMensuralSchema = v.object({
  // TODO: Add staffpart.mensural elements
});

export type StaffPartMensuralData = v.InferOutput<typeof StaffPartMensuralSchema>;

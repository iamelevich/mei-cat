import * as v from "valibot";

/**
 * Groups elements that represent staffdefpart.mensural parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffDefPart.mensural.html
 */
export const StaffDefPartMensuralSchema = v.object({
  // TODO: Add staffdefpart.mensural elements
});

export type StaffDefPartMensuralData = v.InferOutput<typeof StaffDefPartMensuralSchema>;

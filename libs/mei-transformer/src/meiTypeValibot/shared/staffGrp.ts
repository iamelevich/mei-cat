import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups staff definitions.
 * @see https://music-encoding.org/guidelines/v5/elements/staffGrp.html
 */
export const StaffGrpSchema = AnythingObjectSchema; // TODO: implement element

export type StaffGrpData = v.InferOutput<typeof StaffGrpSchema>;

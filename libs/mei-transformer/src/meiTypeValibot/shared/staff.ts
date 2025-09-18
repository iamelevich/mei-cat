import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A group of staves.
 * @see https://music-encoding.org/guidelines/v5/elements/staff.html
 */
export const StaffSchema = AnythingObjectSchema; // TODO: implement element

export type StaffData = v.InferOutput<typeof StaffSchema>;

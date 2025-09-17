import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates an ossia staff.
 * @see https://music-encoding.org/guidelines/v5/elements/oStaff.html
 */
export const OStaffSchema = AnythingObjectSchema; // TODO: implement element

export type OStaffData = v.InferOutput<typeof OStaffSchema>;

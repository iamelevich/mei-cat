import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates the staff definition.
 * @see https://music-encoding.org/guidelines/v5/elements/staffDef.html
 */
export const StaffDefSchema = AnythingObjectSchema; // TODO: implement element

export type StaffDefData = v.InferOutput<typeof StaffDefSchema>;

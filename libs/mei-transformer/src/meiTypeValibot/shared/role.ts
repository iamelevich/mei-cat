import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a role.
 * @see https://music-encoding.org/guidelines/v5/elements/role.html
 */
export const RoleSchema = AnythingObjectSchema; // TODO: implement element

export type RoleData = v.InferOutput<typeof RoleSchema>;

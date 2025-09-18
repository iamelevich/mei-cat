import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a role name.
 * @see https://music-encoding.org/guidelines/v5/elements/roleName.html
 */
export const RoleNameSchema = AnythingObjectSchema; // TODO: implement element

export type RoleNameData = v.InferOutput<typeof RoleNameSchema>;

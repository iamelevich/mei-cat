import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a role description.
 * @see https://music-encoding.org/guidelines/v5/elements/roleDesc.html
 */
export const RoleDescSchema = AnythingObjectSchema; // TODO: implement element

export type RoleDescData = v.InferOutput<typeof RoleDescSchema>;

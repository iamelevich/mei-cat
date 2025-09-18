import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a page description.
 * @see https://music-encoding.org/guidelines/v5/elements/pgDesc.html
 */
export const PgDescSchema = AnythingObjectSchema; // TODO: implement element

export type PgDescData = v.InferOutput<typeof PgDescSchema>;

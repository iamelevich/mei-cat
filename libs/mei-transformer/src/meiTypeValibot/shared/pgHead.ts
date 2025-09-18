import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a page header.
 * @see https://music-encoding.org/guidelines/v5/elements/pgHead.html
 */
export const PgHeadSchema = AnythingObjectSchema; // TODO: implement element

export type PgHeadData = v.InferOutput<typeof PgHeadSchema>;

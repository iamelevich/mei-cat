import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a page footer.
 * @see https://music-encoding.org/guidelines/v5/elements/pgFoot.html
 */
export const PgFootSchema = AnythingObjectSchema; // TODO: implement element

export type PgFootData = v.InferOutput<typeof PgFootSchema>;

import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A non-sounding event found on the staff.
 * @see https://music-encoding.org/guidelines/v5/elements/rest.html
 */
export const RestSchema = AnythingObjectSchema; // TODO: implement element

export type RestData = v.InferOutput<typeof RestSchema>;

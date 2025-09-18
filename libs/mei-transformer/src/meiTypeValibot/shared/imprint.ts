import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains information relating to the publication or distribution of a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/imprint.html
 */
export const ImprintSchema = AnythingObjectSchema; // TODO: implement element

export type ImprintData = v.InferOutput<typeof ImprintSchema>;

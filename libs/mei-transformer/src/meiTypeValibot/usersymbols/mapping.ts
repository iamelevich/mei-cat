import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * mapping element.
 * @see https://music-encoding.org/guidelines/v5/elements/mapping.html
 */
export const MappingSchema = AnythingObjectSchema; // TODO: implement element

export type MappingData = v.InferOutput<typeof MappingSchema>;

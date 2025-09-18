import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * avFile element.
 * @see https://music-encoding.org/guidelines/v5/elements/avFile.html
 */
export const AvFileSchema = AnythingObjectSchema; // TODO: implement element

export type AvFileData = v.InferOutput<typeof AvFileSchema>;

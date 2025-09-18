import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * vel element.
 * @see https://music-encoding.org/guidelines/v5/elements/vel.html
 */
export const VelSchema = AnythingObjectSchema; // TODO: implement element

export type VelData = v.InferOutput<typeof VelSchema>;

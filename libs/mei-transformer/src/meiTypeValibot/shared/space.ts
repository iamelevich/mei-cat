import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A placeholder used to fill an incomplete measure, layer, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/space.html
 */
export const SpaceSchema = AnythingObjectSchema; // TODO: implement element

export type SpaceData = v.InferOutput<typeof SpaceSchema>;

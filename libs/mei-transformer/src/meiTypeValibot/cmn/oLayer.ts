import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates an ossia layer.
 * @see https://music-encoding.org/guidelines/v5/elements/oLayer.html
 */
export const OLayerSchema = AnythingObjectSchema; // TODO: implement element

export type OLayerData = v.InferOutput<typeof OLayerSchema>;

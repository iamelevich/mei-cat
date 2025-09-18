import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates the layer definition.
 * @see https://music-encoding.org/guidelines/v5/elements/layerDef.html
 */
export const LayerDefSchema = AnythingObjectSchema; // TODO: implement element

export type LayerDefData = v.InferOutput<typeof LayerDefSchema>;

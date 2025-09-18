import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * An independent stream of events on a staff.
 * @see https://music-encoding.org/guidelines/v5/elements/layer.html
 */
export const LayerSchema = AnythingObjectSchema; // TODO: implement element

export type LayerData = v.InferOutput<typeof LayerSchema>;

import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * trkName element.
 * @see https://music-encoding.org/guidelines/v5/elements/trkName.html
 */
export const TrkNameSchema = AnythingObjectSchema; // TODO: implement element

export type TrkNameData = v.InferOutput<typeof TrkNameSchema>;

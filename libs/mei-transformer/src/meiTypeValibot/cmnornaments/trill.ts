import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * trill element.
 * @see https://music-encoding.org/guidelines/v5/elements/trill.html
 */
export const TrillSchema = AnythingObjectSchema; // TODO: implement element

export type TrillData = v.InferOutput<typeof TrillSchema>;

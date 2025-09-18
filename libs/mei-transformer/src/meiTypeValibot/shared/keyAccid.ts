import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a key signature accidental.
 * @see https://music-encoding.org/guidelines/v5/elements/keyAccid.html
 */
export const KeyAccidSchema = AnythingObjectSchema; // TODO: implement element

export type KeyAccidData = v.InferOutput<typeof KeyAccidSchema>;

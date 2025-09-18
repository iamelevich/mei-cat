import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates the key signature.
 * @see https://music-encoding.org/guidelines/v5/elements/keySig.html
 */
export const KeySigSchema = AnythingObjectSchema; // TODO: implement element

export type KeySigData = v.InferOutput<typeof KeySigSchema>;

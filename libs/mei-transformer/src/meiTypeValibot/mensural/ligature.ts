import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * ligature element.
 * @see https://music-encoding.org/guidelines/v5/elements/ligature.html
 */
export const LigatureSchema = AnythingObjectSchema; // TODO: implement element

export type LigatureData = v.InferOutput<typeof LigatureSchema>;

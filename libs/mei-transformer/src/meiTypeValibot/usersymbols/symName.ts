import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * symName element.
 * @see https://music-encoding.org/guidelines/v5/elements/symName.html
 */
export const SymNameSchema = AnythingObjectSchema; // TODO: implement element

export type SymNameData = v.InferOutput<typeof SymNameSchema>;

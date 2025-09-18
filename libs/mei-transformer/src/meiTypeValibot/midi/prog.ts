import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * prog element.
 * @see https://music-encoding.org/guidelines/v5/elements/prog.html
 */
export const ProgSchema = AnythingObjectSchema; // TODO: implement element

export type ProgData = v.InferOutput<typeof ProgSchema>;

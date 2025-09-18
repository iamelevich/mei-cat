import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * genState element.
 * @see https://music-encoding.org/guidelines/v5/elements/genState.html
 */
export const GenStateSchema = AnythingObjectSchema; // TODO: implement element

export type GenStateData = v.InferOutput<typeof GenStateSchema>;

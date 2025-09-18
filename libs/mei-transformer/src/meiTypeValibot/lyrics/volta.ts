import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * volta element.
 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
 */
export const VoltaSchema = AnythingObjectSchema; // TODO: implement element

export type VoltaData = v.InferOutput<typeof VoltaSchema>;

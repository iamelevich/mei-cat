import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * divLine element.
 * @see https://music-encoding.org/guidelines/v5/elements/divLine.html
 */
export const DivLineSchema = AnythingObjectSchema; // TODO: implement element

export type DivLineData = v.InferOutput<typeof DivLineSchema>;

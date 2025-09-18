import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * propValue element.
 * @see https://music-encoding.org/guidelines/v5/elements/propValue.html
 */
export const PropValueSchema = AnythingObjectSchema; // TODO: implement element

export type PropValueData = v.InferOutput<typeof PropValueSchema>;

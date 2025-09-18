import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * propName element.
 * @see https://music-encoding.org/guidelines/v5/elements/propName.html
 */
export const PropNameSchema = AnythingObjectSchema; // TODO: implement element

export type PropNameData = v.InferOutput<typeof PropNameSchema>;

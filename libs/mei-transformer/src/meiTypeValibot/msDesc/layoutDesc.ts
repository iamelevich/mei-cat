import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the layout of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/layoutDesc.html
 */
export const LayoutDescSchema = AnythingObjectSchema; // TODO: implement element

export type LayoutDescData = v.InferOutput<typeof LayoutDescSchema>;

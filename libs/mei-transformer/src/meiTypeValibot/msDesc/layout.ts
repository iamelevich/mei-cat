import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the layout of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/layout.html
 */
export const LayoutSchema = AnythingObjectSchema; // TODO: implement element

export type LayoutData = v.InferOutput<typeof LayoutSchema>;

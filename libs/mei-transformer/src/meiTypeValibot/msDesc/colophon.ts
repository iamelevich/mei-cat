import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the colophon of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/colophon.html
 */
export const ColophonSchema = AnythingObjectSchema; // TODO: implement element

export type ColophonData = v.InferOutput<typeof ColophonSchema>;

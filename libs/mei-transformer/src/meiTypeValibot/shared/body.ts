import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the main content of a document.
 * @see https://music-encoding.org/guidelines/v5/elements/body.html
 */
export const BodySchema = AnythingObjectSchema; // TODO: implement element

export type BodyData = v.InferOutput<typeof BodySchema>;

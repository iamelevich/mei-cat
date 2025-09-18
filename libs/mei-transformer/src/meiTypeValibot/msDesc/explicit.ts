import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the explicit of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/explicit.html
 */
export const ExplicitSchema = AnythingObjectSchema; // TODO: implement element

export type ExplicitData = v.InferOutput<typeof ExplicitSchema>;

import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the rubric of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/rubric.html
 */
export const RubricSchema = AnythingObjectSchema; // TODO: implement element

export type RubricData = v.InferOutput<typeof RubricSchema>;

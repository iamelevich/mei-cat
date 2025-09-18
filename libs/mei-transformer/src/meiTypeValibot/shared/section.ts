import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a section.
 * @see https://music-encoding.org/guidelines/v5/elements/section.html
 */
export const SectionSchema = AnythingObjectSchema; // TODO: implement element

export type SectionData = v.InferOutput<typeof SectionSchema>;

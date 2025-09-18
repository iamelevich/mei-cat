import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a musical division.
 * @see https://music-encoding.org/guidelines/v5/elements/mdiv.html
 */
export const MdivSchema = AnythingObjectSchema; // TODO: implement element

export type MdivData = v.InferOutput<typeof MdivSchema>;

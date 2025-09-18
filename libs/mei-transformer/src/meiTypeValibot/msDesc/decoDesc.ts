import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the decoration of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/decoDesc.html
 */
export const DecoDescSchema = AnythingObjectSchema; // TODO: implement element

export type DecoDescData = v.InferOutput<typeof DecoDescSchema>;

import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the foliation of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/foliation.html
 */
export const FoliationSchema = AnythingObjectSchema; // TODO: implement element

export type FoliationData = v.InferOutput<typeof FoliationSchema>;

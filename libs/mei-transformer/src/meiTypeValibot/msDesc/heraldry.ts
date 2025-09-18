import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a description of the heraldry of a manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
 */
export const HeraldrySchema = AnythingObjectSchema; // TODO: implement element

export type HeraldryData = v.InferOutput<typeof HeraldrySchema>;

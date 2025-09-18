import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the range of pitches found in a musical line, phrase, or work.
 * @see https://music-encoding.org/guidelines/v5/elements/ambitus.html
 */
export const AmbitusSchema = AnythingObjectSchema; // TODO: implement element

export type AmbitusData = v.InferOutput<typeof AmbitusSchema>;

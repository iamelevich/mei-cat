import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A dot added to a note, rest, or chord.
 * @see https://music-encoding.org/guidelines/v5/elements/dot.html
 */
export const DotSchema = AnythingObjectSchema; // TODO: implement element

export type DotData = v.InferOutput<typeof DotSchema>;

import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indication of the exact location of a particular note on the staff and, therefore, the other notes as well.
 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
 */
export const ClefSchema = AnythingObjectSchema; // TODO: implement element

export type ClefData = v.InferOutput<typeof ClefSchema>;

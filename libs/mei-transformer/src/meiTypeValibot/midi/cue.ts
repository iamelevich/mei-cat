import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * cue element.
 * @see https://music-encoding.org/guidelines/v5/elements/cue.html
 */
export const CueSchema = AnythingObjectSchema; // TODO: implement element

export type CueData = v.InferOutput<typeof CueSchema>;

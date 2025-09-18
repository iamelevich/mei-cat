import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a label abbreviation.
 * @see https://music-encoding.org/guidelines/v5/elements/labelAbbr.html
 */
export const LabelAbbrSchema = AnythingObjectSchema; // TODO: implement element

export type LabelAbbrData = v.InferOutput<typeof LabelAbbrSchema>;

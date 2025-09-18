import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Vertical line drawn through one or more staves that divides musical notation into metrical units.
 * @see https://music-encoding.org/guidelines/v5/elements/barLine.html
 */
export const BarLineSchema = AnythingObjectSchema; // TODO: implement element

export type BarLineData = v.InferOutput<typeof BarLineSchema>;

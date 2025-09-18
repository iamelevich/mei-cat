import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups elements that represent chord tables.
 * @see https://music-encoding.org/guidelines/v5/elements/chordTable.html
 */
export const ChordTableSchema = AnythingObjectSchema; // TODO: implement element

export type ChordTableData = v.InferOutput<typeof ChordTableSchema>;

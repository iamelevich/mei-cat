import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * instrDef element.
 * @see https://music-encoding.org/guidelines/v5/elements/instrDef.html
 */
export const InstrDefSchema = AnythingObjectSchema; // TODO: implement element

export type InstrDefData = v.InferOutput<typeof InstrDefSchema>;

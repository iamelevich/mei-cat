import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * symbolDef element.
 * @see https://music-encoding.org/guidelines/v5/elements/symbolDef.html
 */
export const SymbolDefSchema = AnythingObjectSchema; // TODO: implement element

export type SymbolDefData = v.InferOutput<typeof SymbolDefSchema>;

import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * symbolTable element.
 * @see https://music-encoding.org/guidelines/v5/elements/symbolTable.html
 */
export const SymbolTableSchema = AnythingObjectSchema; // TODO: implement element

export type SymbolTableData = v.InferOutput<typeof SymbolTableSchema>;

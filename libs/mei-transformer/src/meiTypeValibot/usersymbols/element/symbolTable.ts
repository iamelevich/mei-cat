import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { SymbolDefSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SymbolTableSchema
 */
const SymbolTableBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Contains a set of user-defined symbols.
 * @see https://music-encoding.org/guidelines/v5/elements/symbolTable.html
 */
export const SymbolTableSchema = v.intersect([
	SymbolTableBaseSchema,
	v.object({
		/**
		 * Reference to element symbolDef
		 * @see https://music-encoding.org/guidelines/v5/elements/symbolDef.html
		 */
		symbolDef: v.union([
			v.lazy(() => SymbolDefSchema),
			v.array(v.lazy(() => SymbolDefSchema)),
		]),
	}),
]);

export type SymbolTableData = v.InferOutput<typeof SymbolTableSchema>;

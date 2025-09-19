import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { SymbolDefSchema } from "../element/symbolDef";

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
export const SymbolTableSchema = v.lazy(() =>
	v.intersect([
		SymbolTableBaseSchema,
		v.object({
			/**
			 * Reference to element symbolDef
			 * @see https://music-encoding.org/guidelines/v5/elements/symbolDef.html
			 */
			symbolDef: v.optional(
				v.union([v.array(SymbolDefSchema), SymbolDefSchema]),
			),
		}),
	]),
);

export type SymbolTableData = v.InferOutput<typeof SymbolTableSchema>;

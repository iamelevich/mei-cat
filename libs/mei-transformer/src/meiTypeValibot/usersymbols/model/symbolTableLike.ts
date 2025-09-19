import * as v from "valibot";
import { type SymbolTableData, SymbolTableSchema } from "..";

/**
 * Groups elements that group symbol definitions.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.symbolTableLike.html
 */
export const ModelSymbolTableLikeSchema: v.GenericSchema<ModelSymbolTableLikeData> =
	v.object({
		/**
		 * Contains a set of user-defined symbols.
		 * @see https://music-encoding.org/guidelines/v5/elements/symbolTable.html
		 */
		symbolTable: v.optional(
			v.union([
				v.lazy(() => SymbolTableSchema),
				v.array(v.lazy(() => SymbolTableSchema)),
			]),
		),
	});

export type ModelSymbolTableLikeData = {
	symbolTable?: SymbolTableData | SymbolTableData[];
};

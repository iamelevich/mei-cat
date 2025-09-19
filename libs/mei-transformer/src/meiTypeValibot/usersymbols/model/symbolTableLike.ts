import * as v from "valibot";
import {
	type SymbolTableData,
	SymbolTableSchema,
} from "../element/symbolTable";

/**
 * Groups elements that group symbol definitions.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.symbolTableLike.html
 */
export const ModelSymbolTableLikeSchema: v.GenericSchema<ModelSymbolTableLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Contains a set of user-defined symbols.
			 * @see https://music-encoding.org/guidelines/v5/elements/symbolTable.html
			 */
			symbolTable: v.optional(
				v.union([SymbolTableSchema, v.array(SymbolTableSchema)]),
			),
		}),
	);

export type ModelSymbolTableLikeData = {
	symbolTable?: SymbolTableData | SymbolTableData[];
};

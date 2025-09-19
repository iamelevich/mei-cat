import * as v from "valibot";
import {
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
	type ModelAnnotLikeData,
	ModelAnnotLikeSchema,
	type ModelBiblLikeData,
	ModelBiblLikeSchema,
	type ModelDateLikeData,
	ModelDateLikeSchema,
	type ModelEditorialLikeData,
	ModelEditorialLikeSchema,
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
	type ModelLbLikeData,
	ModelLbLikeSchema,
	type ModelMeasurementLikeData,
	ModelMeasurementLikeSchema,
	type ModelNameLikeData,
	ModelNameLikeSchema,
	type ModelPbLikeData,
	ModelPbLikeSchema,
	type ModelRendLikeData,
	ModelRendLikeSchema,
	type SymbolData,
	SymbolSchema,
} from "..";
import {
	type ModelAddressPartData,
	ModelAddressPartSchema,
	type ModelNameLikeLabelData,
	ModelNameLikeLabelSchema,
} from "../../namesdates";
import {
	type ModelFigureLikeData,
	ModelFigureLikeSchema,
} from "../../figtable";
import { type ModelLocrefLikeData, ModelLocrefLikeSchema } from "../../ptrref";

/**
 * Groups elements that may appear as part of a bibliographic title.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.titlePart.html
 */
export const MacroTitlePartSchema: v.GenericSchema<MacroTitlePartData> =
	v.intersect([
		v.object({
			/**
			 * Reference to element symbol
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: v.optional(
				v.union([
					v.lazy(() => SymbolSchema),
					v.array(v.lazy(() => SymbolSchema)),
				]),
			),
		}),
		ModelAddressLikeSchema,
		ModelAddressPartSchema,
		ModelAnnotLikeSchema,
		ModelBiblLikeSchema,
		ModelDateLikeSchema,
		ModelEditorialLikeSchema,
		ModelFigureLikeSchema,
		ModelIdentifierLikeSchema,
		ModelLbLikeSchema,
		ModelLocrefLikeSchema,
		ModelMeasurementLikeSchema,
		ModelNameLikeSchema,
		ModelNameLikeLabelSchema,
		ModelPbLikeSchema,
		ModelRendLikeSchema,
	]);

export type MacroTitlePartData = {
	symbol?: SymbolData | SymbolData[];
} & ModelAddressLikeData &
	ModelAddressPartData &
	ModelAnnotLikeData &
	ModelBiblLikeData &
	ModelDateLikeData &
	ModelEditorialLikeData &
	ModelFigureLikeData &
	ModelIdentifierLikeData &
	ModelLbLikeData &
	ModelLocrefLikeData &
	ModelMeasurementLikeData &
	ModelNameLikeData &
	ModelNameLikeLabelData &
	ModelPbLikeData &
	ModelRendLikeData;

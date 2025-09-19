import * as v from "valibot";
import {
	type ModelFigureLikeData,
	ModelFigureLikeSchema,
} from "../../figtable/model/figureLike";
import {
	type ModelAddressPartData,
	ModelAddressPartSchema,
} from "../../namesdates/model/addressPart";
import {
	type ModelNameLikeLabelData,
	ModelNameLikeLabelSchema,
} from "../../namesdates/model/nameLike.label";
import {
	type ModelLocrefLikeData,
	ModelLocrefLikeSchema,
} from "../../ptrref/model/locrefLike";
import { type SymbolData, SymbolSchema } from "../element/symbol";
import {
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
} from "../model/addressLike";
import {
	type ModelAnnotLikeData,
	ModelAnnotLikeSchema,
} from "../model/annotLike";
import { type ModelBiblLikeData, ModelBiblLikeSchema } from "../model/biblLike";
import { type ModelDateLikeData, ModelDateLikeSchema } from "../model/dateLike";
import {
	type ModelEditorialLikeData,
	ModelEditorialLikeSchema,
} from "../model/editorialLike";
import {
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
} from "../model/identifierLike";
import { type ModelLbLikeData, ModelLbLikeSchema } from "../model/lbLike";
import {
	type ModelMeasurementLikeData,
	ModelMeasurementLikeSchema,
} from "../model/measurementLike";
import { type ModelNameLikeData, ModelNameLikeSchema } from "../model/nameLike";
import { type ModelPbLikeData, ModelPbLikeSchema } from "../model/pbLike";
import { type ModelRendLikeData, ModelRendLikeSchema } from "../model/rendLike";

/**
 * Groups elements that may appear as part of a bibliographic title.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.titlePart.html
 */
export const MacroTitlePartSchema: v.GenericSchema<MacroTitlePartData> = v.lazy(
	() =>
		v.intersect([
			v.object({
				/**
				 * Reference to element symbol
				 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
				 */
				symbol: v.optional(v.union([v.array(SymbolSchema), SymbolSchema])),
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
		]),
);

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

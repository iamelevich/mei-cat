import * as v from "valibot";
import {
	type ModelFigureLikeData,
	ModelFigureLikeSchema,
} from "../../figtable";
import { type ModelMsInlineData, ModelMsInlineSchema } from "../../msDesc";
import {
	type ModelAddressPartData,
	ModelAddressPartSchema,
	type ModelNameLikeLabelData,
	ModelNameLikeLabelSchema,
} from "../../namesdates";
import { type ModelLocrefLikeData, ModelLocrefLikeSchema } from "../../ptrref";
import {
	type ModelQLikeData,
	ModelQLikeSchema,
	type SegData,
	SegSchema,
} from "../../text";
import {
	type DedicateeData,
	DedicateeSchema,
	type DimensionsData,
	DimensionsSchema,
	type ExtentData,
	ExtentSchema,
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
	type ModelAnnotLikeData,
	ModelAnnotLikeSchema,
	type ModelBiblLikeData,
	ModelBiblLikeSchema,
	type ModelDateLikeData,
	ModelDateLikeSchema,
	type ModelDimLikeData,
	ModelDimLikeSchema,
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
	type ModelRelationLikeData,
	ModelRelationLikeSchema,
	type ModelRendLikeData,
	ModelRendLikeSchema,
	type ModelTitleLikeData,
	ModelTitleLikeSchema,
	type SymbolData,
	SymbolSchema,
	type TermData,
	TermSchema,
} from "..";

/**
 * Groups textual elements that occur at the level of individual words or phrases. This class is equivalent to the model.textPhraseLike class without the pb element.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textPhraseLike.limited.html
 */
export const ModelTextPhraseLikeLimitedSchema: v.GenericSchema<ModelTextPhraseLikeLimitedData> =
	v.intersect([
		v.object({
			/**
			 * Entity to whom a creative work is formally offered.
			 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
			 */
			dedicatee: v.optional(
				v.union([
					v.lazy(() => DedicateeSchema),
					v.array(v.lazy(() => DedicateeSchema)),
				]),
			),
			/**
			 * Information about the physical size of an entity; usually includes numerical data.
			 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
			 */
			dimensions: v.optional(
				v.union([
					v.lazy(() => DimensionsSchema),
					v.array(v.lazy(() => DimensionsSchema)),
				]),
			),
			/**
			 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: v.optional(
				v.union([
					v.lazy(() => ExtentSchema),
					v.array(v.lazy(() => ExtentSchema)),
				]),
			),
			/**
			 * represents any segmentation of text below the &#34;text component&#34; level.
			 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
			 */
			seg: v.optional(
				v.union([v.lazy(() => SegSchema), v.array(v.lazy(() => SegSchema))]),
			),
			/**
			 * A reference to a previously defined symbol.
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: v.optional(
				v.union([
					v.lazy(() => SymbolSchema),
					v.array(v.lazy(() => SymbolSchema)),
				]),
			),
			/**
			 * Keyword or phrase which describes a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: v.optional(
				v.union([v.lazy(() => TermSchema), v.array(v.lazy(() => TermSchema))]),
			),
		}),
		ModelAddressLikeSchema,
		ModelAddressPartSchema,
		ModelAnnotLikeSchema,
		ModelBiblLikeSchema,
		ModelDateLikeSchema,
		ModelDimLikeSchema,
		ModelEditorialLikeSchema,
		ModelFigureLikeSchema,
		ModelIdentifierLikeSchema,
		ModelLbLikeSchema,
		ModelLocrefLikeSchema,
		ModelMeasurementLikeSchema,
		ModelMsInlineSchema,
		ModelNameLikeSchema,
		ModelNameLikeLabelSchema,
		ModelQLikeSchema,
		ModelRelationLikeSchema,
		ModelRendLikeSchema,
		ModelTitleLikeSchema,
	]);

export type ModelTextPhraseLikeLimitedData = {
	dedicatee?: DedicateeData | DedicateeData[];
	dimensions?: DimensionsData | DimensionsData[];
	extent?: ExtentData | ExtentData[];
	seg?: SegData | SegData[];
	symbol?: SymbolData | SymbolData[];
	term?: TermData | TermData[];
} & ModelAddressLikeData &
	ModelAddressPartData &
	ModelAnnotLikeData &
	ModelBiblLikeData &
	ModelDateLikeData &
	ModelDimLikeData &
	ModelEditorialLikeData &
	ModelFigureLikeData &
	ModelIdentifierLikeData &
	ModelLbLikeData &
	ModelLocrefLikeData &
	ModelMeasurementLikeData &
	ModelMsInlineData &
	ModelNameLikeData &
	ModelNameLikeLabelData &
	ModelQLikeData &
	ModelRelationLikeData &
	ModelRendLikeData &
	ModelTitleLikeData;

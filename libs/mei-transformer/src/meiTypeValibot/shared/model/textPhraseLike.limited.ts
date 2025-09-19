import * as v from "valibot";
import {
	type ModelFigureLikeData,
	ModelFigureLikeSchema,
} from "../../figtable/model/figureLike";
import {
	type ModelMsInlineData,
	ModelMsInlineSchema,
} from "../../msDesc/model/msInline";
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
import { type SegData, SegSchema } from "../../text/element/seg";
import { type ModelQLikeData, ModelQLikeSchema } from "../../text/model/qLike";
import { type DedicateeData, DedicateeSchema } from "../element/dedicatee";
import { type DimensionsData, DimensionsSchema } from "../element/dimensions";
import { type ExtentData, ExtentSchema } from "../element/extent";
import { type SymbolData, SymbolSchema } from "../element/symbol";
import { type TermData, TermSchema } from "../element/term";
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
import { type ModelDimLikeData, ModelDimLikeSchema } from "../model/dimLike";
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
import {
	type ModelRelationLikeData,
	ModelRelationLikeSchema,
} from "../model/relationLike";
import { type ModelRendLikeData, ModelRendLikeSchema } from "../model/rendLike";
import {
	type ModelTitleLikeData,
	ModelTitleLikeSchema,
} from "../model/titleLike";

/**
 * Groups textual elements that occur at the level of individual words or phrases. This class is equivalent to the model.textPhraseLike class without the pb element.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textPhraseLike.limited.html
 */
export const ModelTextPhraseLikeLimitedSchema: v.GenericSchema<ModelTextPhraseLikeLimitedData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Entity to whom a creative work is formally offered.
				 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
				 */
				dedicatee: v.optional(
					v.union([DedicateeSchema, v.array(DedicateeSchema)]),
				),
				/**
				 * Information about the physical size of an entity; usually includes numerical data.
				 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
				 */
				dimensions: v.optional(
					v.union([DimensionsSchema, v.array(DimensionsSchema)]),
				),
				/**
				 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
				 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
				 */
				extent: v.optional(v.union([ExtentSchema, v.array(ExtentSchema)])),
				/**
				 * represents any segmentation of text below the &#34;text component&#34; level.
				 * @see https://music-encoding.org/guidelines/v5/elements/seg.html
				 */
				seg: v.optional(v.union([SegSchema, v.array(SegSchema)])),
				/**
				 * A reference to a previously defined symbol.
				 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
				 */
				symbol: v.optional(v.union([SymbolSchema, v.array(SymbolSchema)])),
				/**
				 * Keyword or phrase which describes a resource.
				 * @see https://music-encoding.org/guidelines/v5/elements/term.html
				 */
				term: v.optional(v.union([TermSchema, v.array(TermSchema)])),
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
		]),
	);

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

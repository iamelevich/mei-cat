import * as v from "valibot";
import {
	type ModelMidiLikeData,
	ModelMidiLikeSchema,
} from "../../midi/model/midiLike";
import {
	type ModelControlEventLikeData,
	ModelControlEventLikeSchema,
} from "../../shared/model/controlEventLike";
import {
	type ModelStaffLikeData,
	ModelStaffLikeSchema,
} from "../../shared/model/staffLike";
import {
	type ModelControlEventLikeCmnData,
	ModelControlEventLikeCmnSchema,
} from "./controlEventLike.cmn";
import { type ModelOssiaLikeData, ModelOssiaLikeSchema } from "./ossiaLike";

/**
 * Groups elements that may appear within a CMN measure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measurePart.html
 */
export const ModelMeasurePartSchema: v.GenericSchema<ModelMeasurePartData> =
	v.lazy(() =>
		v.intersect([
			ModelControlEventLikeSchema,
			ModelControlEventLikeCmnSchema,
			ModelMidiLikeSchema,
			ModelOssiaLikeSchema,
			ModelStaffLikeSchema,
		]),
	);

export type ModelMeasurePartData = ModelControlEventLikeData &
	ModelControlEventLikeCmnData &
	ModelMidiLikeData &
	ModelOssiaLikeData &
	ModelStaffLikeData;

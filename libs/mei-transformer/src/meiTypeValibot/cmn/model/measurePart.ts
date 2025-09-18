import * as v from "valibot";
import {
	type ControlEventLikeData,
	ControlEventLikeSchema,
	type MidiLikeData,
	MidiLikeSchema,
	type StaffLikeData,
	StaffLikeSchema,
} from "../../shared";
import {
	type ControlEventLikeCmnData,
	ControlEventLikeCmnSchema,
} from "./controlEventLike.cmn";
import { type OssiaLikeData, OssiaLikeSchema } from "./ossiaLike";

// Base schema with attributes only
const MeasurePartBaseSchema = v.object({});

type MeasurePartBaseData = v.InferOutput<typeof MeasurePartBaseSchema>;

/**
 * Groups elements that may appear within a CMN measure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measurePart.html
 */
export const MeasurePartSchema: v.GenericSchema<MeasurePartData> = v.intersect([
	MeasurePartBaseSchema,
	ControlEventLikeSchema,
	ControlEventLikeCmnSchema,
	MidiLikeSchema,
	OssiaLikeSchema,
	StaffLikeSchema,
]);

export type MeasurePartData = MeasurePartBaseData &
	ControlEventLikeData &
	ControlEventLikeCmnData &
	MidiLikeData &
	OssiaLikeData &
	StaffLikeData;

import * as v from "valibot";
import { AttrBeamAnlSchema } from "../analytical";
import { StandardTagSchema } from "../common";
import { type AppLikeData, AppLikeSchema } from "../critapp";
import {
	type EditLikeData,
	EditLikeSchema,
	type TranscriptionLikeData,
	TranscriptionLikeSchema,
} from "../edittrans";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrBeamGesSchema } from "../gestural";
import {
	AttrCommonSchema,
	type EventLikeData,
	EventLikeSchema,
} from "../shared";
import { AttrBeamVisSchema } from "../visual";
import { AttrBeamLogSchema } from "./attr/beam.log";
import {
	type EventLikeCmnData,
	EventLikeCmnSchema,
} from "./model/eventLike.cmn";

// Base schema with attributes only
const BeamBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrBeamLogSchema.entries,
	...AttrBeamVisSchema.entries,
	...AttrBeamGesSchema.entries,
	...AttrBeamAnlSchema.entries,
});

type BeamBaseData = v.InferOutput<typeof BeamBaseSchema>;

/**
 * A container for a series of explicitly beamed events that begins and ends entirely within a measure.
 * @see https://music-encoding.org/guidelines/v5/elements/beam.html
 */
export const BeamSchema: v.GenericSchema<BeamData> = v.intersect([
	BeamBaseSchema,
	AppLikeSchema,
	EditLikeSchema,
	EventLikeSchema,
	EventLikeCmnSchema,
	TranscriptionLikeSchema,
]);

export type BeamData = BeamBaseData &
	AppLikeData &
	EditLikeData &
	EventLikeData &
	EventLikeCmnData &
	TranscriptionLikeData;

import * as v from "valibot";
import { type EventLikeCmnData, EventLikeCmnSchema } from "./eventLike.cmn";
import {
	type EventLikeMeasureFillingData,
	EventLikeMeasureFillingSchema,
} from "./eventLike.measureFilling";

/**
 * Groups notated events that may appear at the layer level in CMN.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.layerPart.cmn.html
 */
export const LayerPartCmnSchema: v.GenericSchema<LayerPartCmnData> =
	v.intersect([EventLikeCmnSchema, EventLikeMeasureFillingSchema]);

export type LayerPartCmnData = EventLikeCmnData & EventLikeMeasureFillingData;

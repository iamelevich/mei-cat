import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	type ModelNameLikeAgentData,
	ModelNameLikeAgentSchema,
	type ModelNameLikeGeogNameData,
	ModelNameLikeGeogNameSchema,
} from "../../namesdates";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
	type ModelDateLikeData,
	ModelDateLikeSchema,
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
} from "..";
import {
	type BiblListData,
	BiblListSchema,
	type EventData,
	EventSchema,
	type NameData,
	NameSchema,
} from ".";

/**
 * Base schema with attribute, to simplify types for EventListSchema
 */
const EventListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

type EventListBaseData = v.InferOutput<typeof EventListBaseSchema>;

/**
 * Contains historical information given as a sequence of significant past events.
 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
 */
export const EventListSchema: v.GenericSchema<EventListData> = v.intersect([
	EventListBaseSchema,
	v.object({
		/**
		 * Reference to element biblList
		 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
		 */
		biblList: v.optional(
			v.union([
				v.lazy(() => BiblListSchema),
				v.array(v.lazy(() => BiblListSchema)),
			]),
		),
		/**
		 * Reference to element event
		 * @see https://music-encoding.org/guidelines/v5/elements/event.html
		 */
		event: v.optional(
			v.union([v.lazy(() => EventSchema), v.array(v.lazy(() => EventSchema))]),
		),
		/**
		 * Reference to element eventList
		 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
		 */
		eventList: v.optional(
			v.union([
				v.lazy(() => EventListSchema),
				v.array(v.lazy(() => EventListSchema)),
			]),
		),
		/**
		 * Reference to element name
		 * @see https://music-encoding.org/guidelines/v5/elements/name.html
		 */
		name: v.optional(
			v.union([v.lazy(() => NameSchema), v.array(v.lazy(() => NameSchema))]),
		),
	}),
	ModelAddressLikeSchema,
	ModelDateLikeSchema,
	ModelHeadLikeSchema,
	ModelNameLikeAgentSchema,
	ModelNameLikeGeogNameSchema,
]);

export type EventListData = EventListBaseData & {
	biblList?: BiblListData | BiblListData[];
	event?: EventData | EventData[];
	eventList?: EventListData | EventListData[];
	name?: NameData | NameData[];
} & ModelAddressLikeData &
	ModelDateLikeData &
	ModelHeadLikeData &
	ModelNameLikeAgentData &
	ModelNameLikeGeogNameData;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import {
	type ModelNameLikeAgentData,
	ModelNameLikeAgentSchema,
} from "../../namesdates/model/nameLike.agent";
import {
	type ModelNameLikeGeogNameData,
	ModelNameLikeGeogNameSchema,
} from "../../namesdates/model/nameLike.geogName";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { type BiblListData, BiblListSchema } from "../element/biblList";
import { type EventData, EventSchema } from "../element/event";
import { type NameData, NameSchema } from "../element/name";
import {
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
} from "../model/addressLike";
import { type ModelDateLikeData, ModelDateLikeSchema } from "../model/dateLike";
import { type ModelHeadLikeData, ModelHeadLikeSchema } from "../model/headLike";

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
export const EventListSchema: v.GenericSchema<EventListData> = v.lazy(() =>
	v.intersect([
		EventListBaseSchema,
		v.object({
			/**
			 * Reference to element biblList
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: v.optional(v.union([BiblListSchema, v.array(BiblListSchema)])),
			/**
			 * Reference to element event
			 * @see https://music-encoding.org/guidelines/v5/elements/event.html
			 */
			event: v.optional(v.union([EventSchema, v.array(EventSchema)])),
			/**
			 * Reference to element eventList
			 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
			 */
			eventList: v.optional(
				v.union([EventListSchema, v.array(EventListSchema)]),
			),
			/**
			 * Reference to element name
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: v.optional(v.union([NameSchema, v.array(NameSchema)])),
		}),
		ModelAddressLikeSchema,
		ModelDateLikeSchema,
		ModelHeadLikeSchema,
		ModelNameLikeAgentSchema,
		ModelNameLikeGeogNameSchema,
	]),
);

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

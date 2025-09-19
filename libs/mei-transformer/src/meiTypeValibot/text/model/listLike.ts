import * as v from "valibot";
import {
	type BiblListData,
	BiblListSchema,
} from "../../shared/element/biblList";
import {
	type CastListData,
	CastListSchema,
} from "../../shared/element/castList";
import {
	type EventListData,
	EventListSchema,
} from "../../shared/element/eventList";
import { type ListData, ListSchema } from "../element/list";

/**
 * Groups list-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.listLike.html
 */
export const ModelListLikeSchema: v.GenericSchema<ModelListLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * List of bibliographic references.
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: v.optional(v.union([BiblListSchema, v.array(BiblListSchema)])),
			/**
			 * Contains a single cast list or dramatis personae.
			 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
			 */
			castList: v.optional(v.union([CastListSchema, v.array(CastListSchema)])),
			/**
			 * Contains historical information given as a sequence of significant past events.
			 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
			 */
			eventList: v.optional(
				v.union([EventListSchema, v.array(EventListSchema)]),
			),
			/**
			 * A formatting element that contains a series of items separated from one another and arranged in a linear, often vertical, sequence.
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
			list: v.optional(v.union([ListSchema, v.array(ListSchema)])),
		}),
);

export type ModelListLikeData = {
	biblList?: BiblListData | BiblListData[];
	castList?: CastListData | CastListData[];
	eventList?: EventListData | EventListData[];
	list?: ListData | ListData[];
};

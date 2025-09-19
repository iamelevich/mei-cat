import * as v from "valibot";
import {
	type BiblListData,
	BiblListSchema,
	type CastListData,
	CastListSchema,
	type EventListData,
	EventListSchema,
} from "../../shared";
import { type ListData, ListSchema } from "..";

/**
 * Groups list-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.listLike.html
 */
export const ModelListLikeSchema: v.GenericSchema<ModelListLikeData> = v.object(
	{
		/**
		 * List of bibliographic references.
		 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
		 */
		biblList: v.optional(
			v.union([
				v.lazy(() => BiblListSchema),
				v.array(v.lazy(() => BiblListSchema)),
			]),
		),
		/**
		 * Contains a single cast list or dramatis personae.
		 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
		 */
		castList: v.optional(
			v.union([
				v.lazy(() => CastListSchema),
				v.array(v.lazy(() => CastListSchema)),
			]),
		),
		/**
		 * Contains historical information given as a sequence of significant past events.
		 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
		 */
		eventList: v.optional(
			v.union([
				v.lazy(() => EventListSchema),
				v.array(v.lazy(() => EventListSchema)),
			]),
		),
		/**
		 * A formatting element that contains a series of items separated from one another and arranged in a linear, often vertical, sequence.
		 * @see https://music-encoding.org/guidelines/v5/elements/list.html
		 */
		list: v.optional(
			v.union([v.lazy(() => ListSchema), v.array(v.lazy(() => ListSchema))]),
		),
	},
);

export type ModelListLikeData = {
	biblList?: BiblListData | BiblListData[];
	castList?: CastListData | CastListData[];
	eventList?: EventListData | EventListData[];
	list?: ListData | ListData[];
};

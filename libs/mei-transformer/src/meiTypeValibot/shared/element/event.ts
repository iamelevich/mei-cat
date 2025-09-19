import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCalendaredSchema,
	AttrCommonSchema,
	AttrDatableSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
} from "..";
import { AttrEditSchema } from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { BiblListSchema, CastListSchema, EventListSchema } from ".";
import { ListSchema } from "../../text";
import { ModelEventPartSchema } from "../../header";
import { ModelTableLikeSchema } from "../../figtable";

/**
 * Base schema with attribute, to simplify types for EventSchema
 */
const EventBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCalendaredSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a free-text event description.
 * @see https://music-encoding.org/guidelines/v5/elements/event.html
 */
export const EventSchema = v.intersect([
	EventBaseSchema,
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
		 * Reference to element castList
		 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
		 */
		castList: v.optional(
			v.union([
				v.lazy(() => CastListSchema),
				v.array(v.lazy(() => CastListSchema)),
			]),
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
		 * Reference to element list
		 * @see https://music-encoding.org/guidelines/v5/elements/list.html
		 */
		list: v.optional(
			v.union([v.lazy(() => ListSchema), v.array(v.lazy(() => ListSchema))]),
		),
	}),
	ModelEventPartSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
	ModelTableLikeSchema,
]);

export type EventData = v.InferOutput<typeof EventSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans/attr/edit";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelTableLikeSchema } from "../../figtable/model/tableLike";
import { ModelEventPartSchema } from "../../header/model/eventPart";
import { ListSchema } from "../../text/element/list";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCalendaredSchema } from "../attr/calendared";
import { AttrCommonSchema } from "../attr/common";
import { AttrDatableSchema } from "../attr/datable";
import { AttrLangSchema } from "../attr/lang";
import { BiblListSchema } from "../element/biblList";
import { CastListSchema } from "../element/castList";
import { EventListSchema } from "../element/eventList";
import { ModelHeadLikeSchema } from "../model/headLike";
import { ModelPLikeSchema } from "../model/pLike";

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
export const EventSchema = v.lazy(() =>
	v.intersect([
		EventBaseSchema,
		v.object({
			/**
			 * Reference to element biblList
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: v.optional(v.union([BiblListSchema, v.array(BiblListSchema)])),
			/**
			 * Reference to element castList
			 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
			 */
			castList: v.optional(v.union([CastListSchema, v.array(CastListSchema)])),
			/**
			 * Reference to element eventList
			 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
			 */
			eventList: v.optional(
				v.union([EventListSchema, v.array(EventListSchema)]),
			),
			/**
			 * Reference to element list
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
			list: v.optional(v.union([ListSchema, v.array(ListSchema)])),
		}),
		ModelEventPartSchema,
		ModelHeadLikeSchema,
		ModelPLikeSchema,
		ModelTableLikeSchema,
	]),
);

export type EventData = v.InferOutput<typeof EventSchema>;

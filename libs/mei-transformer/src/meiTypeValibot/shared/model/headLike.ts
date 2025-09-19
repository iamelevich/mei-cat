import * as v from "valibot";
import { type HeadData, HeadSchema } from "../element/head";

/**
 * Groups elements used to provide a heading at the start of a text division or other markup component.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.headLike.html
 */
export const ModelHeadLikeSchema: v.GenericSchema<ModelHeadLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: v.optional(v.union([v.array(HeadSchema), HeadSchema])),
		}),
);

export type ModelHeadLikeData = {
	head?: HeadData | HeadData[];
};

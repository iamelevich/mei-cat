import * as v from "valibot";
import {
	type EncodingDescData,
	EncodingDescSchema,
} from "../element/encodingDesc";
import { type WorkListData, WorkListSchema } from "../element/workList";

/**
 * Groups elements that may appear as part of the MEI metadata header.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.headerPart.html
 */
export const ModelHeaderPartSchema: v.GenericSchema<ModelHeaderPartData> =
	v.lazy(() =>
		v.object({
			/**
			 * Documents the relationship between an electronic file and the source or sources from which it was derived as well as applications used in the encoding/editing process.
			 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
			 */
			encodingDesc: v.optional(
				v.union([v.array(EncodingDescSchema), EncodingDescSchema]),
			),
			/**
			 * Grouping mechanism for information describing non-bibliographic aspects of a text.
			 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
			 */
			workList: v.optional(v.union([v.array(WorkListSchema), WorkListSchema])),
		}),
	);

export type ModelHeaderPartData = {
	encodingDesc?: EncodingDescData | EncodingDescData[];
	workList?: WorkListData | WorkListData[];
};

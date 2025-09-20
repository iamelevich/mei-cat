import * as v from "valibot";
import { type MdivData, MdivSchema } from "../element/mdiv";

/**
 * Groups elements used to represent generic structural divisions of music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.mdivLike.html
 */
export const ModelMdivLikeSchema: v.GenericSchema<ModelMdivLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Contains a subdivision of the body of a musical text.
			 * @see https://music-encoding.org/guidelines/v5/elements/mdiv.html
			 */
			mdiv: v.optional(v.union([v.array(MdivSchema), MdivSchema])),
		}),
);

export type ModelMdivLikeData = {
	mdiv?: MdivData | MdivData[];
};

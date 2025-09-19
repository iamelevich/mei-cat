import * as v from "valibot";
import { type MdivData, MdivSchema } from "..";

/**
 * Groups elements used to represent generic structural divisions of music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.mdivLike.html
 */
export const ModelMdivLikeSchema: v.GenericSchema<ModelMdivLikeData> = v.object(
	{
		/**
		 * Contains a subdivision of the body of a musical text.
		 * @see https://music-encoding.org/guidelines/v5/elements/mdiv.html
		 */
		mdiv: v.optional(
			v.union([v.lazy(() => MdivSchema), v.array(v.lazy(() => MdivSchema))]),
		),
	},
);

export type ModelMdivLikeData = {
	mdiv?: MdivData | MdivData[];
};

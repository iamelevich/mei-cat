import * as v from "valibot";
import { type NcData, NcSchema } from "../element/nc";
import { type NcGrpData, NcGrpSchema } from "../element/ncGrp";

/**
 * Groups elements that may occur within a neume.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.neumePart.html
 */
export const ModelNeumePartSchema: v.GenericSchema<ModelNeumePartData> = v.lazy(
	() =>
		v.object({
			/**
			 * Sign representing a single pitched event, although the exact pitch may not be known.
			 * @see https://music-encoding.org/guidelines/v5/elements/nc.html
			 */
			nc: v.optional(v.union([v.array(NcSchema), NcSchema])),
			/**
			 * Collection of one or more neume components.
			 * @see https://music-encoding.org/guidelines/v5/elements/ncGrp.html
			 */
			ncGrp: v.optional(v.union([v.array(NcGrpSchema), NcGrpSchema])),
		}),
);

export type ModelNeumePartData = {
	nc?: NcData | NcData[];
	ncGrp?: NcGrpData | NcGrpData[];
};

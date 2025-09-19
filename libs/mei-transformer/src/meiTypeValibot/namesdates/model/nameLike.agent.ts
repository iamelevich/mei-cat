import * as v from "valibot";
import { type CorpNameData, CorpNameSchema } from "../element/corpName";
import { type PersNameData, PersNameSchema } from "../element/persName";

/**
 * Groups elements which contain names of individuals or corporate bodies.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.agent.html
 */
export const ModelNameLikeAgentSchema: v.GenericSchema<ModelNameLikeAgentData> =
	v.lazy(() =>
		v.object({
			/**
			 * Identifies an organization or group of people that acts as a single entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
			 */
			corpName: v.optional(v.union([CorpNameSchema, v.array(CorpNameSchema)])),
			/**
			 * Designation for an individual, including any or all of that individual's forenames, surnames, honorific titles, and added names.
			 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
			 */
			persName: v.optional(v.union([PersNameSchema, v.array(PersNameSchema)])),
		}),
	);

export type ModelNameLikeAgentData = {
	corpName?: CorpNameData | CorpNameData[];
	persName?: PersNameData | PersNameData[];
};

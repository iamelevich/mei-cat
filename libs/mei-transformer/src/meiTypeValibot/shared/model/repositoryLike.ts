import * as v from "valibot";
import { type RepositoryData, RepositorySchema } from "..";

/**
 * Groups elements that denote a corporate entity that holds a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.repositoryLike.html
 */
export const ModelRepositoryLikeSchema: v.GenericSchema<ModelRepositoryLikeData> =
	v.object({
		/**
		 * Institution, agency, or individual which holds a bibliographic item.
		 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
		 */
		repository: v.optional(
			v.union([
				v.lazy(() => RepositorySchema),
				v.array(v.lazy(() => RepositorySchema)),
			]),
		),
	});

export type ModelRepositoryLikeData = {
	repository?: RepositoryData | RepositoryData[];
};

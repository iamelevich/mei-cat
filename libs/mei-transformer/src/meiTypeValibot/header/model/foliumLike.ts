import * as v from "valibot";
import { type FoliumData, FoliumSchema } from "../element/folium";

/**
 * Collects foliumlike elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.foliumLike.html
 */
export const ModelFoliumLikeSchema: v.GenericSchema<ModelFoliumLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Describes a single leaf of paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/folium.html
			 */
			folium: v.optional(v.union([FoliumSchema, v.array(FoliumSchema)])),
		}),
	);

export type ModelFoliumLikeData = {
	folium?: FoliumData | FoliumData[];
};

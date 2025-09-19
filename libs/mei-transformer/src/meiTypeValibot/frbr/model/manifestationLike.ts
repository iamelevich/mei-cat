import * as v from "valibot";
import { type ManifestationData, ManifestationSchema } from "..";

/**
 * Collects FRBR manifestation-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.manifestationLike.html
 */
export const ModelManifestationLikeSchema: v.GenericSchema<ModelManifestationLikeData> =
	v.object({
		/**
		 * A bibliographic description of a physical embodiment of an expression of a work.
		 * @see https://music-encoding.org/guidelines/v5/elements/manifestation.html
		 */
		manifestation: v.optional(
			v.union([
				v.lazy(() => ManifestationSchema),
				v.array(v.lazy(() => ManifestationSchema)),
			]),
		),
	});

export type ModelManifestationLikeData = {
	manifestation?: ManifestationData | ManifestationData[];
};

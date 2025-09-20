import * as v from "valibot";
import { type OssiaData, OssiaSchema } from "../element/ossia";

/**
 * Groups elements that function like ossia.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.ossiaLike.html
 */
export const ModelOssiaLikeSchema: v.GenericSchema<ModelOssiaLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Captures original notation and a differently notated version *present in the source being transcribed* .
			 * @see https://music-encoding.org/guidelines/v5/elements/ossia.html
			 */
			ossia: v.optional(v.union([v.array(OssiaSchema), OssiaSchema])),
		}),
);

export type ModelOssiaLikeData = {
	ossia?: OssiaData | OssiaData[];
};

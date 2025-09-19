import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelHeadLikeSchema } from "../../shared";
import { ModelManifestationLikeSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ManifestationListSchema
 */
const ManifestationListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * A container for the descriptions of physical embodiments of an expression of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
 */
export const ManifestationListSchema = v.intersect([
	ManifestationListBaseSchema,
	ModelHeadLikeSchema,
	ModelManifestationLikeSchema,
]);

export type ManifestationListData = v.InferOutput<
	typeof ManifestationListSchema
>;

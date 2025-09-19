import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelDivLikeSchema } from "../../text";
import {
	AttrCommonSchema,
	AttrMetadataPointingSchema,
	ModelMdivLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for BodySchema
 */
const BodyBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains the whole of a single musical text, excluding any front or back matter.
 * @see https://music-encoding.org/guidelines/v5/elements/body.html
 */
export const BodySchema = v.intersect([
	BodyBaseSchema,
	ModelDivLikeSchema,
	ModelMdivLikeSchema,
]);

export type BodyData = v.InferOutput<typeof BodySchema>;

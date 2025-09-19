import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for ProjectDescSchema
 */
const ProjectDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Project-level meta-data describing the aim or purpose for which the electronic file was encoded, funding agencies, etc. together with any other relevant information concerning the process by which it was assembled or collected.
 * @see https://music-encoding.org/guidelines/v5/elements/projectDesc.html
 */
export const ProjectDescSchema = v.intersect([
	ProjectDescBaseSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
]);

export type ProjectDescData = v.InferOutput<typeof ProjectDescSchema>;

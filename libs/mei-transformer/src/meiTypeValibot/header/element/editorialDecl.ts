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
import { ModelEditorialDeclPartSchema } from "..";

/**
 * Base schema with attribute, to simplify types for EditorialDeclSchema
 */
const EditorialDeclBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Used to provide details of editorial principles and practices applied during the encoding of musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/editorialDecl.html
 */
export const EditorialDeclSchema = v.intersect([
	EditorialDeclBaseSchema,
	ModelEditorialDeclPartSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
]);

export type EditorialDeclData = v.InferOutput<typeof EditorialDeclSchema>;

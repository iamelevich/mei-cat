import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";
import { ModelEditorialDeclPartSchema } from "../model/editorialDeclPart";

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
export const EditorialDeclSchema = v.lazy(() =>
	v.intersect([
		EditorialDeclBaseSchema,
		ModelEditorialDeclPartSchema,
		ModelHeadLikeSchema,
		ModelPLikeSchema,
	]),
);

export type EditorialDeclData = v.InferOutput<typeof EditorialDeclSchema>;

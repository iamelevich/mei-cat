import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrNameSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";
import { NameLinkSchema } from ".";

/**
 * Base schema with attribute, to simplify types for FamNameSchema
 */
const FamNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * Contains a family (inherited) name, as opposed to a given, baptismal, or nick name.
 * @see https://music-encoding.org/guidelines/v5/elements/famName.html
 */
export const FamNameSchema = v.intersect([
	FamNameBaseSchema,
	v.object({
		/**
		 * Reference to element nameLink
		 * @see https://music-encoding.org/guidelines/v5/elements/nameLink.html
		 */
		nameLink: v.optional(
			v.union([
				v.lazy(() => NameLinkSchema),
				v.array(v.lazy(() => NameLinkSchema)),
			]),
		),
	}),
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type FamNameData = v.InferOutput<typeof FamNameSchema>;

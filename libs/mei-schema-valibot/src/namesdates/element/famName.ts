import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans/attr/edit";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrNameSchema } from "../../shared/attr/name";
import { ModelTextPhraseLikeSchema } from "../../shared/model/textPhraseLike";
import { NameLinkSchema } from "./nameLink";

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
export const FamNameSchema = v.lazy(() =>
	v.intersect([
		FamNameBaseSchema,
		v.object({
			/**
			 * Reference to element nameLink
			 * @see https://music-encoding.org/guidelines/v5/elements/nameLink.html
			 */
			nameLink: v.optional(v.union([v.array(NameLinkSchema), NameLinkSchema])),
		}),
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type FamNameData = v.InferOutput<typeof FamNameSchema>;

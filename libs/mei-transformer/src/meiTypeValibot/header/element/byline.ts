import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelRespLikePartSchema } from "../../shared/model/respLikePart";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for BylineSchema
 */
const BylineBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains the primary statement of responsibility given for a work on its title page.
 * @see https://music-encoding.org/guidelines/v5/elements/byline.html
 */
export const BylineSchema = v.lazy(() =>
	v.intersect([
		BylineBaseSchema,
		ModelRespLikePartSchema,
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type BylineData = v.InferOutput<typeof BylineSchema>;

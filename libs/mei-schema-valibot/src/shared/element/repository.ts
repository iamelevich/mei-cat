import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrNameSchema } from "../attr/name";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for RepositorySchema
 */
const RepositoryBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * Institution, agency, or individual which holds a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
 */
export const RepositorySchema = v.lazy(() =>
	v.intersect([RepositoryBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type RepositoryData = v.InferOutput<typeof RepositorySchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for RecipientSchema
 */
const RecipientBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The name of the individual(s), institution(s) or organization(s) receiving correspondence.
 * @see https://music-encoding.org/guidelines/v5/elements/recipient.html
 */
export const RecipientSchema = v.lazy(() =>
	v.intersect([RecipientBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type RecipientData = v.InferOutput<typeof RecipientSchema>;

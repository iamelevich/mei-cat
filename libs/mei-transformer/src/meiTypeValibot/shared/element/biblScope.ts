import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrExtentSchema } from "../attr/extent";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for BiblScopeSchema
 */
const BiblScopeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrExtentSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 *
	 */
	"@from": v.optional(v.string()),
	/**
	 *
	 */
	"@to": v.optional(v.string()),
});

/**
 * Defines the scope of a bibliographic reference, for example as a list of page numbers, or a named subdivision of a larger work.
 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
 */
export const BiblScopeSchema = v.lazy(() =>
	v.intersect([BiblScopeBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type BiblScopeData = v.InferOutput<typeof BiblScopeSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrExtentSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";

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
export const BiblScopeSchema = v.intersect([
	BiblScopeBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type BiblScopeData = v.InferOutput<typeof BiblScopeSchema>;

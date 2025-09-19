import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for LayoutSchema
 */
const LayoutBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Specifies the number of columns per page.
	 */
	"@cols": v.optional(v.string()),
	/**
	 * Specifies the number of ruled text lines per column.
	 */
	"@ruledlines": v.optional(v.string()),
	/**
	 * Specifies the number of ruled staves per column.
	 */
	"@ruledstaves": v.optional(v.string()),
	/**
	 * Specifies the number of written text lines per column.
	 */
	"@writtenlines": v.optional(v.string()),
	/**
	 * Specifies the number of written staves per column.
	 */
	"@writtenstaves": v.optional(v.string()),
});

/**
 * Describes how text is laid out on the page, including information about any ruling, pricking, or other evidence of page-preparation techniques.
 * @see https://music-encoding.org/guidelines/v5/elements/layout.html
 */
export const LayoutSchema = v.intersect([
	LayoutBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type LayoutData = v.InferOutput<typeof LayoutSchema>;

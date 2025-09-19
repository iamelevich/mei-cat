import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema, AttrCommonSchema } from "../../shared";

/**
 * Base schema with attribute, to simplify types for DomainsDeclSchema
 */
const DomainsDeclBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,

	// Direct attributes
	/**
	 *
	 */
	"@anl": v.optional(v.string()),
	/**
	 *
	 */
	"@ges": v.optional(v.string()),
	/**
	 *
	 */
	"@vis": v.optional(v.string()),
});

/**
 * Indicates which domains are included in the encoding.
 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html
 */
export const DomainsDeclSchema = v.intersect([DomainsDeclBaseSchema]);

export type DomainsDeclData = v.InferOutput<typeof DomainsDeclSchema>;

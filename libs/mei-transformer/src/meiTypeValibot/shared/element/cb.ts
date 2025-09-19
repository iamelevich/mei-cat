import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBasicSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrResponsibilitySchema,
	AttrSourceSchema,
	AttrTypedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for CbSchema
 */
const CbBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrSourceSchema.entries,
	...AttrTypedSchema.entries,

	// Direct attributes
	/**
	 * Records the column number.
	 */
	"@n": v.optional(v.string()),
});

/**
 * An empty formatting element that forces text to begin in a new column.
 * @see https://music-encoding.org/guidelines/v5/elements/cb.html
 */
export const CbSchema = v.intersect([CbBaseSchema]);

export type CbData = v.InferOutput<typeof CbSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrInternetMediaSchema,
	AttrPointingSchema,
	AttrWhitespaceSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for IncipCodeSchema
 */
const IncipCodeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrPointingSchema.entries,
	...AttrWhitespaceSchema.entries,

	// Direct attributes
	/**
	 * Form of the encoded incipit.
	 */
	"@form": v.optional(v.string()),
});

/**
 * Incipit coded in a non-XML, plain text format, such as Plaine &amp; Easie Code.
 * @see https://music-encoding.org/guidelines/v5/elements/incipCode.html
 */
export const IncipCodeSchema = v.intersect([IncipCodeBaseSchema]);

export type IncipCodeData = v.InferOutput<typeof IncipCodeSchema>;

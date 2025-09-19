import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrNNumberLikeSchema } from "../../shared/attr/nNumberLike";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";

/**
 * Base schema with attribute, to simplify types for PropNameSchema
 */
const PropNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,

	// Direct attributes
	/**
	 * Characterizes the property name.
	 */
	"@type": v.optional(v.string()),
});

/**
 * Name of a property of the symbol.
 * @see https://music-encoding.org/guidelines/v5/elements/propName.html
 */
export const PropNameSchema = v.lazy(() => v.intersect([PropNameBaseSchema]));

export type PropNameData = v.InferOutput<typeof PropNameSchema>;

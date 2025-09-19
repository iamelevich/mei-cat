import * as v from "valibot";
import { AttrBasicSchema } from "../attr/basic";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrLinkingSchema } from "../attr/linking";
import { AttrNNumberLikeSchema } from "../attr/nNumberLike";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { AttrTypedSchema } from "../attr/typed";

/**
 * Attributes common to many elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.common.html
 */
export const AttrCommonSchema = v.object({
	// Inherited attribute classes
	...AttrBasicSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrTypedSchema.entries,
});

export type AttrCommonData = v.InferOutput<typeof AttrCommonSchema>;

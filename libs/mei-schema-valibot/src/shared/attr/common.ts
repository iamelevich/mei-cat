import * as v from "valibot";
import { AttrBasicSchema } from "./basic";
import { AttrLabelledSchema } from "./labelled";
import { AttrLinkingSchema } from "./linking";
import { AttrNNumberLikeSchema } from "./nNumberLike";
import { AttrResponsibilitySchema } from "./responsibility";
import { AttrTypedSchema } from "./typed";

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

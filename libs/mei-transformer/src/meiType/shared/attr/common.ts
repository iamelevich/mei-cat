import { type Static, Type } from "@sinclair/typebox";
import { AttrBasicSchema } from "./basic";
import { AttrLabelledSchema } from "./labelled";
import { AttrLinkingSchema } from "./linking";
import { AttrNNumberLikeSchema } from "./nNumberLike";
import { AttrResponsibilitySchema } from "./responsibility";
import { AttrTypedSchema } from "./typed";

/**
 * Attributes common to many elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.common.html
 */
export const AttrCommonSchema = Type.Intersect([
	AttrBasicSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	AttrTypedSchema,
]);

export type AttrCommon = Static<typeof AttrCommonSchema>;

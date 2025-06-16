import { type Static, Type } from "@sinclair/typebox";
import { AttrBasicSchema } from "./basic";
import { AttrBiblSchema } from "./bibl";
import { AttrLabelledSchema } from "./labelled";
import { AttrLinkingSchema } from "./linking";
import { AttrNNumberLikeSchema } from "./nNumberLike";
import { AttrResponsibilitySchema } from "./responsibility";
import { AttrTypedSchema } from "./typed";

/**
 * Attributes common to many elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.common.html
 */
export const AttrCommonSchema = Type.Composite([
	AttrBasicSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	AttrTypedSchema,
	AttrBiblSchema,
]);

export type AttrCommon = Static<typeof AttrCommonSchema>;

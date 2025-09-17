import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrPointingSchema } from "../shared/attr/pointing";

/**
 * Defines a traversible pointer to another location, using only attributes to describe the destination.
 * The ptr element is empty and uses only attributes to describe the destination.
 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
 */
export const PtrSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrPointingSchema,
]);

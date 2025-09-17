import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrLinkingSchema } from "./attr/linking";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Defines a traversible pointer to another location, using only attributes to describe the destination.
 * @see https://music-encoding.org/guidelines/v5/elements/ptr.html
 */
export const PtrSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrTypedSchema,
]);

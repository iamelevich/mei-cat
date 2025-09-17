import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrLangSchema } from "./attr/lang";
import { AttrLinkingSchema } from "./attr/linking";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Defines a traversible reference to another location. May contain text and sub-elements that describe the destination.
 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
 */
export const RefSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrTypedSchema,
]);


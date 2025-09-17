import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrLangSchema } from "./attr/lang";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Contains any heading, for example, the title of a section of text, or the heading of a list.
 * @see https://music-encoding.org/guidelines/v5/elements/head.html
 */
export const HeadSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);

import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Collection of text phrases which describe a resource.
 * @see https://music-encoding.org/guidelines/v5/elements/termList.html
 */
export const TermListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);


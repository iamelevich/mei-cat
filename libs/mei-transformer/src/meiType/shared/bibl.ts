import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
 */
export const BiblSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);

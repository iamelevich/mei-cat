import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * A formatting element that contains a series of items separated from one another and arranged in a vertical, horizontal, or matrix-like manner.
 * @see https://music-encoding.org/guidelines/v5/elements/list.html
 */
export const ListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);


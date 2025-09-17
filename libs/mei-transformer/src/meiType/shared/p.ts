import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * One or more text phrases that form a logical prose passage.
 * @see https://music-encoding.org/guidelines/v5/elements/p.html
 */
export const PSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);


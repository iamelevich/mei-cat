import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Numeric information in any form.
 * @see https://music-encoding.org/guidelines/v5/elements/num.html
 */
export const NumSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);

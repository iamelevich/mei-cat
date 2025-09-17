import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * A string identifying a point in time or the time period between two such points.
 * @see https://music-encoding.org/guidelines/v5/elements/date.html
 */
export const DateSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);

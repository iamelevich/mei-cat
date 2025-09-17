import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Description of the horizontal size of an object.
 * @see https://music-encoding.org/guidelines/v5/elements/width.html
 */
export const WidthSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);


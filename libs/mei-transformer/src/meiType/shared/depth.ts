import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Description of a measurement taken through a three-dimensional object.
 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
 */
export const DepthSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

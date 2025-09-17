import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Description of the vertical size of an object.
 * @see https://music-encoding.org/guidelines/v5/elements/height.html
 */
export const HeightSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

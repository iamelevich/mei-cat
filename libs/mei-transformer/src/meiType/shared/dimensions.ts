import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Information about the physical size of an entity; usually includes numerical data.
 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
 */
export const DimensionsSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

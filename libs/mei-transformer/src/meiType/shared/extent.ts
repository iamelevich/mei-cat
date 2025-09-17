import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
 */
export const ExtentSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

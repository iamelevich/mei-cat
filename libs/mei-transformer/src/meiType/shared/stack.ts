import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * An inline table with a single column.
 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
 */
export const StackSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);


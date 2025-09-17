import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
 */
export const BiblStructSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

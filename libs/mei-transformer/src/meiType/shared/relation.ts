import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Describes a relationship or linkage amongst entities.
 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
 */
export const RelationSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);


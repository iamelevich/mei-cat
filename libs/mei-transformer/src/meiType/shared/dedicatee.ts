import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Entity to whom a creative work is formally offered.
 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
 */
export const DedicateeSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

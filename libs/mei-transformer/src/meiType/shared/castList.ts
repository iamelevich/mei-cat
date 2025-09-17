import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Contains a single cast list or dramatis personae.
 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
 */
export const CastListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

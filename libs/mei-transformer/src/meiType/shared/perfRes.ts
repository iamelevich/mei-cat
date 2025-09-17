import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Name of an instrument on which a performer plays, a performer's voice range, or a standard performing ensemble designation.
 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
 */
export const PerfResSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);


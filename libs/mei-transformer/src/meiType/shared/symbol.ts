import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * A reference to a previously defined symbol.
 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
 */
export const SymbolSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);


import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Any single dimensional specification.
 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
 */
export const DimSchema = Type.Intersect([StandardTagSchema, AttrCommonSchema]);

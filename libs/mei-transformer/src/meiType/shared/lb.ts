import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * An empty formatting element that forces text to begin on a new line.
 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
 */
export const LbSchema = Type.Intersect([StandardTagSchema, AttrCommonSchema]);


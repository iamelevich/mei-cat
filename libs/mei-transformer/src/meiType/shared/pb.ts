import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * An empty formatting element that forces text to begin on a new page.
 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
 */
export const PbSchema = Type.Intersect([StandardTagSchema, AttrCommonSchema]);


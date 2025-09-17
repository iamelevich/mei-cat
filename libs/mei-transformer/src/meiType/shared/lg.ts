import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * May be used for any section of text that is organized as a group of lines; however, it is most often used for a group of verse lines functioning as a formal unit, e.g., a stanza, refrain, verse paragraph, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
 */
export const LgSchema = Type.Intersect([StandardTagSchema, AttrCommonSchema]);


import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Major structural division of text, such as a preface, chapter or section.
 * @see https://music-encoding.org/guidelines/v5/elements/div.html
 */
export const DivSchema = Type.Intersect([StandardTagSchema, AttrCommonSchema]);

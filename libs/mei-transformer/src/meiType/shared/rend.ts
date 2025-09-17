import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
 */
export const RendSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);


import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Provides a statement explaining the text or indicating the basis for an assertion.
 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
 */
export const AnnotSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
]);

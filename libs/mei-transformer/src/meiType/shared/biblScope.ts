import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Defines the scope of a bibliographic reference, for example as a list of page numbers, or a named subdivision of a larger work.
 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
 */
export const BiblScopeSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);

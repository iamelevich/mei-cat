import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrTypedSchema } from "./attr/typed";

/**
 * The name of the creator of the intellectual content of a non-musical, literary work.
 * @see https://music-encoding.org/guidelines/v5/elements/author.html
 */
export const AuthorSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);

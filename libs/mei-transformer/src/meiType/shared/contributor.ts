import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
 */
export const ContributorSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);

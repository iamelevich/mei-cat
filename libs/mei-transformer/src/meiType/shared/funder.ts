import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
 */
export const FunderSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);


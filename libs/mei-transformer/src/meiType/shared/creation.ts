import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Non-bibliographic details of the creation of an intellectual entity, in narrative form, such as the date, place, and circumstances of its composition. More detailed information may be captured within the history element.
 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
 */
export const CreationSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);

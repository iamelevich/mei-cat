import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
 */
export const SponsorSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);


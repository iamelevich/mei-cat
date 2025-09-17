import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Person or agency, other than a publisher, from which access (including electronic access) to a bibliographic entity may be obtained.
 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
 */
export const DistributorSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	Type.Object(
		{
			// Content model: macro.textphrase
			// This is a simple text content element
		},
		{ additionalProperties: false },
	),
]);

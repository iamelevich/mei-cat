import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
 */
export const DescSchema = Type.Intersect([
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

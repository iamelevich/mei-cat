import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * A container for document text that identifies the feature to which it is attached. For a "tool tip" or other generated label, use the label attribute.
 * @see https://music-encoding.org/guidelines/v5/elements/label.html
 */
export const LabelSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	Type.Object(
		{
			// Content model: macro.textphrase
			// This will be implemented when the full content model is needed
		},
		{ additionalProperties: false },
	),
]);

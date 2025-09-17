import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for editorialDecl element.
 * @see https://music-encoding.org/guidelines/v5/elements/editorialDecl.html
 */
export const EditorialDeclSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type EditorialDeclData = v.InferOutput<typeof EditorialDeclSchema>;

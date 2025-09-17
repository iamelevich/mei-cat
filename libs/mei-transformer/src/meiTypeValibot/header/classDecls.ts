import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for classDecls element.
 * @see https://music-encoding.org/guidelines/v5/elements/classDecls.html
 */
export const ClassDeclsSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ClassDeclsData = v.InferOutput<typeof ClassDeclsSchema>;

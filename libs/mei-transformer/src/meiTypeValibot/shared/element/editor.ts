import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for EditorSchema
 */
const EditorBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
 */
export const EditorSchema = v.intersect([
	EditorBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type EditorData = v.InferOutput<typeof EditorSchema>;

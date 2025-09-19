import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for ScoreFormatSchema
 */
const ScoreFormatBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes the type of score used to represent a musical composition (<abbr>e.g.</abbr>, short score, full score, condensed score, close score, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
 */
export const ScoreFormatSchema = v.intersect([
	ScoreFormatBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type ScoreFormatData = v.InferOutput<typeof ScoreFormatSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

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
export const ScoreFormatSchema = v.lazy(() =>
	v.intersect([ScoreFormatBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type ScoreFormatData = v.InferOutput<typeof ScoreFormatSchema>;

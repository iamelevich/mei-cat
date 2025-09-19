import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrRecordTypeSchema } from "../../header/attr/recordType";
import { CorpNameSchema } from "../../namesdates/element/corpName";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrDataPointingSchema } from "../attr/dataPointing";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrTargetEvalSchema } from "../attr/targetEval";
import { BiblScopeSchema } from "../element/biblScope";
import { EditorSchema } from "../element/editor";
import { ExtentSchema } from "../element/extent";
import { ImprintSchema } from "../element/imprint";
import { RespStmtSchema } from "../element/respStmt";
import { ModelAnnotLikeSchema } from "../model/annotLike";
import { ModelEditionLikeSchema } from "../model/editionLike";
import { ModelIdentifierLikeSchema } from "../model/identifierLike";
import { ModelRespLikePartSchema } from "../model/respLikePart";
import { ModelTitleLikeSchema } from "../model/titleLike";

/**
 * Base schema with attribute, to simplify types for MonogrSchema
 */
const MonogrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrRecordTypeSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Contains bibliographic elements describing an item, for example, a published book or journal, score, recording, or an unpublished manuscript.
 * @see https://music-encoding.org/guidelines/v5/elements/monogr.html
 */
export const MonogrSchema = v.lazy(() =>
	v.intersect([
		MonogrBaseSchema,
		v.object({
			/**
			 * Reference to element biblScope
			 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
			 */
			biblScope: v.optional(
				v.union([BiblScopeSchema, v.array(BiblScopeSchema)]),
			),
			/**
			 * Reference to element corpName
			 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
			 */
			corpName: v.optional(v.union([CorpNameSchema, v.array(CorpNameSchema)])),
			/**
			 * Reference to element editor
			 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
			 */
			editor: v.union([EditorSchema, v.array(EditorSchema)]),
			/**
			 * Reference to element extent
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: v.optional(v.union([ExtentSchema, v.array(ExtentSchema)])),
			/**
			 * Reference to element imprint
			 * @see https://music-encoding.org/guidelines/v5/elements/imprint.html
			 */
			imprint: v.optional(v.union([ImprintSchema, v.array(ImprintSchema)])),
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.union([RespStmtSchema, v.array(RespStmtSchema)]),
		}),
		ModelAnnotLikeSchema,
		ModelEditionLikeSchema,
		ModelIdentifierLikeSchema,
		ModelRespLikePartSchema,
		ModelTitleLikeSchema,
	]),
);

export type MonogrData = v.InferOutput<typeof MonogrSchema>;

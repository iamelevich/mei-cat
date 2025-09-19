import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ModelAnnotLikeSchema,
	ModelEditionLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRespLikePartSchema,
	ModelTitleLikeSchema,
} from "..";
import { AttrRecordTypeSchema } from "../../header";
import {
	BiblScopeSchema,
	EditorSchema,
	ExtentSchema,
	ImprintSchema,
	RespStmtSchema,
} from ".";
import { CorpNameSchema } from "../../namesdates";

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
export const MonogrSchema = v.intersect([
	MonogrBaseSchema,
	v.object({
		/**
		 * Reference to element biblScope
		 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
		 */
		biblScope: v.optional(
			v.union([
				v.lazy(() => BiblScopeSchema),
				v.array(v.lazy(() => BiblScopeSchema)),
			]),
		),
		/**
		 * Reference to element corpName
		 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
		 */
		corpName: v.optional(
			v.union([
				v.lazy(() => CorpNameSchema),
				v.array(v.lazy(() => CorpNameSchema)),
			]),
		),
		/**
		 * Reference to element editor
		 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
		 */
		editor: v.union([
			v.lazy(() => EditorSchema),
			v.array(v.lazy(() => EditorSchema)),
		]),
		/**
		 * Reference to element extent
		 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
		 */
		extent: v.optional(
			v.union([
				v.lazy(() => ExtentSchema),
				v.array(v.lazy(() => ExtentSchema)),
			]),
		),
		/**
		 * Reference to element imprint
		 * @see https://music-encoding.org/guidelines/v5/elements/imprint.html
		 */
		imprint: v.optional(
			v.union([
				v.lazy(() => ImprintSchema),
				v.array(v.lazy(() => ImprintSchema)),
			]),
		),
		/**
		 * Reference to element respStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
		 */
		respStmt: v.union([
			v.lazy(() => RespStmtSchema),
			v.array(v.lazy(() => RespStmtSchema)),
		]),
	}),
	ModelAnnotLikeSchema,
	ModelEditionLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRespLikePartSchema,
	ModelTitleLikeSchema,
]);

export type MonogrData = v.InferOutput<typeof MonogrSchema>;

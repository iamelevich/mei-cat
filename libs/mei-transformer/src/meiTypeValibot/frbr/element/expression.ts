import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	ClassificationSchema,
	ComponentListSchema,
	ContentsSchema,
	ContextSchema,
	ExtMetaSchema,
	HistorySchema,
	LangUsageSchema,
	ModelWorkIdentSchema,
	NotesStmtSchema,
	OtherCharSchema,
	PerfDurationSchema,
	PerfMediumSchema,
	ScoreFormatSchema,
} from "../../header";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	BiblListSchema,
	CreationSchema,
	ExtentSchema,
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRespLikePartSchema,
	ModelTitleLikeSchema,
	RelationListSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for ExpressionSchema
 */
const ExpressionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
});

/**
 * Intellectual or artistic realization of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/expression.html
 */
export const ExpressionSchema = v.intersect([
	ExpressionBaseSchema,
	v.object({
		/**
		 * Reference to element biblList
		 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
		 */
		biblList: v.optional(
			v.union([
				v.lazy(() => BiblListSchema),
				v.array(v.lazy(() => BiblListSchema)),
			]),
		),
		/**
		 * Reference to element classification
		 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
		 */
		classification: v.optional(v.lazy(() => ClassificationSchema)),
		/**
		 * Reference to element componentList
		 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
		 */
		componentList: v.optional(v.lazy(() => ComponentListSchema)),
		/**
		 * Reference to element contents
		 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
		 */
		contents: v.optional(v.lazy(() => ContentsSchema)),
		/**
		 * Reference to element context
		 * @see https://music-encoding.org/guidelines/v5/elements/context.html
		 */
		context: v.optional(v.lazy(() => ContextSchema)),
		/**
		 * Reference to element creation
		 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
		 */
		creation: v.optional(v.lazy(() => CreationSchema)),
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
		 * Reference to element extMeta
		 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
		 */
		extMeta: v.optional(
			v.union([
				v.lazy(() => ExtMetaSchema),
				v.array(v.lazy(() => ExtMetaSchema)),
			]),
		),
		/**
		 * Reference to element history
		 * @see https://music-encoding.org/guidelines/v5/elements/history.html
		 */
		history: v.optional(v.lazy(() => HistorySchema)),
		/**
		 * Reference to element langUsage
		 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
		 */
		langUsage: v.optional(v.lazy(() => LangUsageSchema)),
		/**
		 * Reference to element notesStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
		 */
		notesStmt: v.optional(v.lazy(() => NotesStmtSchema)),
		/**
		 * Reference to element otherChar
		 * @see https://music-encoding.org/guidelines/v5/elements/otherChar.html
		 */
		otherChar: v.optional(
			v.union([
				v.lazy(() => OtherCharSchema),
				v.array(v.lazy(() => OtherCharSchema)),
			]),
		),
		/**
		 * Reference to element perfDuration
		 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
		 */
		perfDuration: v.optional(v.lazy(() => PerfDurationSchema)),
		/**
		 * Reference to element perfMedium
		 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
		 */
		perfMedium: v.optional(v.lazy(() => PerfMediumSchema)),
		/**
		 * Reference to element relationList
		 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
		 */
		relationList: v.optional(v.lazy(() => RelationListSchema)),
		/**
		 * Reference to element scoreFormat
		 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
		 */
		scoreFormat: v.optional(v.lazy(() => ScoreFormatSchema)),
	}),
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRespLikePartSchema,
	ModelTitleLikeSchema,
	ModelWorkIdentSchema,
]);

export type ExpressionData = v.InferOutput<typeof ExpressionSchema>;

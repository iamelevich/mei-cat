import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	BiblListSchema,
	CreationSchema,
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRespLikePartSchema,
	ModelTitleLikeSchema,
	RelationListSchema,
} from "../../shared";
import {
	AudienceSchema,
	ClassificationSchema,
	ComponentListSchema,
	ContentsSchema,
	ContextSchema,
	ExtMetaSchema,
	HistorySchema,
	LangUsageSchema,
	NotesStmtSchema,
	OtherCharSchema,
	PerfDurationSchema,
	PerfMediumSchema,
} from ".";
import { ExpressionListSchema } from "../../frbr";
import { ModelWorkIdentSchema } from "..";

/**
 * Base schema with attribute, to simplify types for WorkSchema
 */
const WorkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Provides a detailed description of a work — a distinct intellectual or artistic creation — specifically its history, language use, and high-level musical attributes (<abbr>e.g.</abbr>, key, tempo, meter, medium of performance, and intended duration).
 * @see https://music-encoding.org/guidelines/v5/elements/work.html
 */
export const WorkSchema = v.intersect([
	WorkBaseSchema,
	v.object({
		/**
		 * Reference to element audience
		 * @see https://music-encoding.org/guidelines/v5/elements/audience.html
		 */
		audience: v.optional(v.lazy(() => AudienceSchema)),
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
		 * Reference to element expressionList
		 * @see https://music-encoding.org/guidelines/v5/elements/expressionList.html
		 */
		expressionList: v.optional(v.lazy(() => ExpressionListSchema)),
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
	}),
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRespLikePartSchema,
	ModelTitleLikeSchema,
	ModelWorkIdentSchema,
]);

export type WorkData = v.InferOutput<typeof WorkSchema>;

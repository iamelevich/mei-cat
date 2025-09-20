import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ClassificationSchema } from "../../header/element/classification";
import { ComponentListSchema } from "../../header/element/componentList";
import { ContentsSchema } from "../../header/element/contents";
import { ContextSchema } from "../../header/element/context";
import { ExtMetaSchema } from "../../header/element/extMeta";
import { HistorySchema } from "../../header/element/history";
import { LangUsageSchema } from "../../header/element/langUsage";
import { NotesStmtSchema } from "../../header/element/notesStmt";
import { OtherCharSchema } from "../../header/element/otherChar";
import { PerfDurationSchema } from "../../header/element/perfDuration";
import { PerfMediumSchema } from "../../header/element/perfMedium";
import { ScoreFormatSchema } from "../../header/element/scoreFormat";
import { ModelWorkIdentSchema } from "../../header/model/workIdent";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { BiblListSchema } from "../../shared/element/biblList";
import { CreationSchema } from "../../shared/element/creation";
import { ExtentSchema } from "../../shared/element/extent";
import { RelationListSchema } from "../../shared/element/relationList";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelIdentifierLikeSchema } from "../../shared/model/identifierLike";
import { ModelRespLikePartSchema } from "../../shared/model/respLikePart";
import { ModelTitleLikeSchema } from "../../shared/model/titleLike";

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
export const ExpressionSchema = v.lazy(() =>
	v.intersect([
		ExpressionBaseSchema,
		v.object({
			/**
			 * Reference to element biblList
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: v.optional(v.union([v.array(BiblListSchema), BiblListSchema])),
			/**
			 * Reference to element classification
			 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
			 */
			classification: v.optional(ClassificationSchema),
			/**
			 * Reference to element componentList
			 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
			 */
			componentList: v.optional(ComponentListSchema),
			/**
			 * Reference to element contents
			 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
			 */
			contents: v.optional(ContentsSchema),
			/**
			 * Reference to element context
			 * @see https://music-encoding.org/guidelines/v5/elements/context.html
			 */
			context: v.optional(ContextSchema),
			/**
			 * Reference to element creation
			 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
			 */
			creation: v.optional(CreationSchema),
			/**
			 * Reference to element extent
			 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
			 */
			extent: v.optional(v.union([v.array(ExtentSchema), ExtentSchema])),
			/**
			 * Reference to element extMeta
			 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
			 */
			extMeta: v.optional(v.union([v.array(ExtMetaSchema), ExtMetaSchema])),
			/**
			 * Reference to element history
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: v.optional(HistorySchema),
			/**
			 * Reference to element langUsage
			 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
			 */
			langUsage: v.optional(LangUsageSchema),
			/**
			 * Reference to element notesStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: v.optional(NotesStmtSchema),
			/**
			 * Reference to element otherChar
			 * @see https://music-encoding.org/guidelines/v5/elements/otherChar.html
			 */
			otherChar: v.optional(
				v.union([v.array(OtherCharSchema), OtherCharSchema]),
			),
			/**
			 * Reference to element perfDuration
			 * @see https://music-encoding.org/guidelines/v5/elements/perfDuration.html
			 */
			perfDuration: v.optional(PerfDurationSchema),
			/**
			 * Reference to element perfMedium
			 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
			 */
			perfMedium: v.optional(PerfMediumSchema),
			/**
			 * Reference to element relationList
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: v.optional(RelationListSchema),
			/**
			 * Reference to element scoreFormat
			 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
			 */
			scoreFormat: v.optional(ScoreFormatSchema),
		}),
		ModelHeadLikeSchema,
		ModelIdentifierLikeSchema,
		ModelRespLikePartSchema,
		ModelTitleLikeSchema,
		ModelWorkIdentSchema,
	]),
);

export type ExpressionData = v.InferOutput<typeof ExpressionSchema>;

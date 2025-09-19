import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ExpressionListSchema } from "../../frbr/element/expressionList";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../../shared/attr/targetEval";
import { BiblListSchema } from "../../shared/element/biblList";
import { CreationSchema } from "../../shared/element/creation";
import { RelationListSchema } from "../../shared/element/relationList";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelIdentifierLikeSchema } from "../../shared/model/identifierLike";
import { ModelRespLikePartSchema } from "../../shared/model/respLikePart";
import { ModelTitleLikeSchema } from "../../shared/model/titleLike";
import { AudienceSchema } from "../element/audience";
import { ClassificationSchema } from "../element/classification";
import { ComponentListSchema } from "../element/componentList";
import { ContentsSchema } from "../element/contents";
import { ContextSchema } from "../element/context";
import { ExtMetaSchema } from "../element/extMeta";
import { HistorySchema } from "../element/history";
import { LangUsageSchema } from "../element/langUsage";
import { NotesStmtSchema } from "../element/notesStmt";
import { OtherCharSchema } from "../element/otherChar";
import { PerfDurationSchema } from "../element/perfDuration";
import { PerfMediumSchema } from "../element/perfMedium";
import { ModelWorkIdentSchema } from "../model/workIdent";

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
export const WorkSchema = v.lazy(() =>
	v.intersect([
		WorkBaseSchema,
		v.object({
			/**
			 * Reference to element audience
			 * @see https://music-encoding.org/guidelines/v5/elements/audience.html
			 */
			audience: v.optional(AudienceSchema),
			/**
			 * Reference to element biblList
			 * @see https://music-encoding.org/guidelines/v5/elements/biblList.html
			 */
			biblList: v.optional(v.union([BiblListSchema, v.array(BiblListSchema)])),
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
			 * Reference to element expressionList
			 * @see https://music-encoding.org/guidelines/v5/elements/expressionList.html
			 */
			expressionList: v.optional(ExpressionListSchema),
			/**
			 * Reference to element extMeta
			 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
			 */
			extMeta: v.optional(v.union([ExtMetaSchema, v.array(ExtMetaSchema)])),
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
				v.union([OtherCharSchema, v.array(OtherCharSchema)]),
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
		}),
		ModelHeadLikeSchema,
		ModelIdentifierLikeSchema,
		ModelRespLikePartSchema,
		ModelTitleLikeSchema,
		ModelWorkIdentSchema,
	]),
);

export type WorkData = v.InferOutput<typeof WorkSchema>;

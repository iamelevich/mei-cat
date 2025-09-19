import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AvailabilitySchema } from "../../header/element/availability";
import { ClassificationSchema } from "../../header/element/classification";
import { ComponentListSchema } from "../../header/element/componentList";
import { ExtMetaSchema } from "../../header/element/extMeta";
import { HistorySchema } from "../../header/element/history";
import { NotesStmtSchema } from "../../header/element/notesStmt";
import { PhysDescSchema } from "../../header/element/physDesc";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../../shared/attr/targetEval";
import { PhysLocSchema } from "../../shared/element/physLoc";
import { RelationListSchema } from "../../shared/element/relationList";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelIdentifierLikeSchema } from "../../shared/model/identifierLike";

/**
 * Base schema with attribute, to simplify types for ItemSchema
 */
const ItemBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Single instance or exemplar of a source/manifestation.
 * @see https://music-encoding.org/guidelines/v5/elements/item.html
 */
export const ItemSchema = v.lazy(() =>
	v.intersect([
		ItemBaseSchema,
		v.object({
			/**
			 * Reference to element availability
			 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
			 */
			availability: v.optional(AvailabilitySchema),
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
			 * Reference to element notesStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: v.optional(NotesStmtSchema),
			/**
			 * Reference to element physDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
			 */
			physDesc: v.optional(PhysDescSchema),
			/**
			 * Reference to element physLoc
			 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
			 */
			physLoc: v.optional(PhysLocSchema),
			/**
			 * Reference to element relationList
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: v.optional(RelationListSchema),
		}),
		ModelHeadLikeSchema,
		ModelIdentifierLikeSchema,
	]),
);

export type ItemData = v.InferOutput<typeof ItemSchema>;

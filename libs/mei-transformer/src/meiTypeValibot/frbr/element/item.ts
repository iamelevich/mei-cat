import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
	PhysLocSchema,
	RelationListSchema,
} from "../../shared";
import {
	AvailabilitySchema,
	ClassificationSchema,
	ComponentListSchema,
	ExtMetaSchema,
	HistorySchema,
	NotesStmtSchema,
	PhysDescSchema,
} from "../../header";

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
export const ItemSchema = v.intersect([
	ItemBaseSchema,
	v.object({
		/**
		 * Reference to element availability
		 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
		 */
		availability: v.optional(v.lazy(() => AvailabilitySchema)),
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
		 * Reference to element notesStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
		 */
		notesStmt: v.optional(v.lazy(() => NotesStmtSchema)),
		/**
		 * Reference to element physDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
		 */
		physDesc: v.optional(v.lazy(() => PhysDescSchema)),
		/**
		 * Reference to element physLoc
		 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
		 */
		physLoc: v.optional(v.lazy(() => PhysLocSchema)),
		/**
		 * Reference to element relationList
		 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
		 */
		relationList: v.optional(v.lazy(() => RelationListSchema)),
	}),
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
]);

export type ItemData = v.InferOutput<typeof ItemSchema>;

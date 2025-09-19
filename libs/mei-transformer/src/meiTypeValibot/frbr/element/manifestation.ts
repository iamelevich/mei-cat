import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrRecordTypeSchema,
	ClassificationSchema,
	ComponentListSchema,
	ContentsSchema,
	ExtMetaSchema,
	HistorySchema,
	LangUsageSchema,
	MacroBibldescPartSchema,
	NotesStmtSchema,
	TitleStmtSchema,
} from "../../header";
import {
	AttrComponentTypeSchema,
	LocusGrpSchema,
	LocusSchema,
} from "../../msDesc";
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
	RelationListSchema,
} from "../../shared";
import { ItemListSchema } from ".";

/**
 * Base schema with attribute, to simplify types for ManifestationSchema
 */
const ManifestationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrComponentTypeSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrRecordTypeSchema.entries,
	...AttrTargetEvalSchema.entries,

	// Direct attributes
	/**
	 * Indicates the manifestation is a unique physical object.
	 */
	"@singleton": v.optional(v.string()),
});

/**
 * A bibliographic description of a physical embodiment of an expression of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/manifestation.html
 */
export const ManifestationSchema = v.intersect([
	ManifestationBaseSchema,
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
		 * Reference to element creation
		 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
		 */
		creation: v.optional(v.lazy(() => CreationSchema)),
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
		 * Reference to element itemList
		 * @see https://music-encoding.org/guidelines/v5/elements/itemList.html
		 */
		itemList: v.optional(v.lazy(() => ItemListSchema)),
		/**
		 * Reference to element langUsage
		 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
		 */
		langUsage: v.optional(v.lazy(() => LangUsageSchema)),
		/**
		 * Reference to element locus
		 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
		 */
		locus: v.optional(
			v.union([v.lazy(() => LocusSchema), v.array(v.lazy(() => LocusSchema))]),
		),
		/**
		 * Reference to element locusGrp
		 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
		 */
		locusGrp: v.optional(
			v.union([
				v.lazy(() => LocusGrpSchema),
				v.array(v.lazy(() => LocusGrpSchema)),
			]),
		),
		/**
		 * Reference to element notesStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
		 */
		notesStmt: v.optional(v.lazy(() => NotesStmtSchema)),
		/**
		 * Reference to element relationList
		 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
		 */
		relationList: v.optional(v.lazy(() => RelationListSchema)),
		/**
		 * Reference to element titleStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
		 */
		titleStmt: v.optional(v.lazy(() => TitleStmtSchema)),
	}),
	MacroBibldescPartSchema,
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
]);

export type ManifestationData = v.InferOutput<typeof ManifestationSchema>;

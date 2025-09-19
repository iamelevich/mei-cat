import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrRecordTypeSchema } from "../../header/attr/recordType";
import { ClassificationSchema } from "../../header/element/classification";
import { ComponentListSchema } from "../../header/element/componentList";
import { ContentsSchema } from "../../header/element/contents";
import { ExtMetaSchema } from "../../header/element/extMeta";
import { HistorySchema } from "../../header/element/history";
import { LangUsageSchema } from "../../header/element/langUsage";
import { NotesStmtSchema } from "../../header/element/notesStmt";
import { TitleStmtSchema } from "../../header/element/titleStmt";
import { MacroBibldescPartSchema } from "../../header/macro/bibldescPart";
import { AttrComponentTypeSchema } from "../../msDesc/attr/componentType";
import { LocusSchema } from "../../msDesc/element/locus";
import { LocusGrpSchema } from "../../msDesc/element/locusGrp";
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
import { ItemListSchema } from "../element/itemList";

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
export const ManifestationSchema = v.lazy(() =>
	v.intersect([
		ManifestationBaseSchema,
		v.object({
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
			 * Reference to element creation
			 * @see https://music-encoding.org/guidelines/v5/elements/creation.html
			 */
			creation: v.optional(CreationSchema),
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
			 * Reference to element itemList
			 * @see https://music-encoding.org/guidelines/v5/elements/itemList.html
			 */
			itemList: v.optional(ItemListSchema),
			/**
			 * Reference to element langUsage
			 * @see https://music-encoding.org/guidelines/v5/elements/langUsage.html
			 */
			langUsage: v.optional(LangUsageSchema),
			/**
			 * Reference to element locus
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: v.optional(v.union([LocusSchema, v.array(LocusSchema)])),
			/**
			 * Reference to element locusGrp
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: v.optional(v.union([LocusGrpSchema, v.array(LocusGrpSchema)])),
			/**
			 * Reference to element notesStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: v.optional(NotesStmtSchema),
			/**
			 * Reference to element relationList
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: v.optional(RelationListSchema),
			/**
			 * Reference to element titleStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
			 */
			titleStmt: v.optional(TitleStmtSchema),
		}),
		MacroBibldescPartSchema,
		ModelHeadLikeSchema,
		ModelIdentifierLikeSchema,
	]),
);

export type ManifestationData = v.InferOutput<typeof ManifestationSchema>;

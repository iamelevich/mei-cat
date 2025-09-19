import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBasicSchema,
	AttrBiblSchema,
	AttrLabelledSchema,
	AttrLangSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
} from "../../shared";
import {
	AltIdSchema,
	EncodingDescSchema,
	ExtMetaSchema,
	FileDescSchema,
	RevisionDescSchema,
	WorkListSchema,
} from ".";
import { ManifestationListSchema } from "../../frbr";

/**
 * Base schema with attribute, to simplify types for MeiHeadSchema
 */
const MeiHeadBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrBiblSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLangSchema.entries,
	...AttrMeiVersionSchema.entries,
	...AttrResponsibilitySchema.entries,

	// Direct attributes
	/**
	 * Specifies the kind of document to which the header is attached, for example whether it is a corpus or individual text.
	 */
	"@type": v.optional(v.string()),
});

/**
 * Supplies the descriptive and declarative metadata prefixed to every MEI-conformant text.
 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
 */
export const MeiHeadSchema = v.intersect([
	MeiHeadBaseSchema,
	v.object({
		/**
		 * Reference to element altId
		 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
		 */
		altId: v.optional(
			v.union([v.lazy(() => AltIdSchema), v.array(v.lazy(() => AltIdSchema))]),
		),
		/**
		 * Reference to element encodingDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
		 */
		encodingDesc: v.optional(v.lazy(() => EncodingDescSchema)),
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
		 * Reference to element fileDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
		 */
		fileDesc: v.optional(v.lazy(() => FileDescSchema)),
		/**
		 * Reference to element manifestationList
		 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
		 */
		manifestationList: v.optional(v.lazy(() => ManifestationListSchema)),
		/**
		 * Reference to element revisionDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
		 */
		revisionDesc: v.optional(v.lazy(() => RevisionDescSchema)),
		/**
		 * Reference to element workList
		 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
		 */
		workList: v.optional(v.lazy(() => WorkListSchema)),
	}),
]);

export type MeiHeadData = v.InferOutput<typeof MeiHeadSchema>;

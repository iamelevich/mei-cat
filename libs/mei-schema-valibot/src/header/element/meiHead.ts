import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ManifestationListSchema } from "../../frbr/element/manifestationList";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMeiVersionSchema } from "../../shared/attr/meiVersion";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AltIdSchema } from "./altId";
import { EncodingDescSchema } from "./encodingDesc";
import { ExtMetaSchema } from "./extMeta";
import { FileDescSchema } from "./fileDesc";
import { RevisionDescSchema } from "./revisionDesc";
import { WorkListSchema } from "./workList";

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
export const MeiHeadSchema = v.lazy(() =>
	v.intersect([
		MeiHeadBaseSchema,
		v.object({
			/**
			 * Reference to element altId
			 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
			 */
			altId: v.optional(v.union([v.array(AltIdSchema), AltIdSchema])),
			/**
			 * Reference to element encodingDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
			 */
			encodingDesc: v.optional(EncodingDescSchema),
			/**
			 * Reference to element extMeta
			 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
			 */
			extMeta: v.optional(v.union([v.array(ExtMetaSchema), ExtMetaSchema])),
			/**
			 * Reference to element fileDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
			 */
			fileDesc: FileDescSchema,
			/**
			 * Reference to element manifestationList
			 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
			 */
			manifestationList: v.optional(ManifestationListSchema),
			/**
			 * Reference to element revisionDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
			 */
			revisionDesc: v.optional(RevisionDescSchema),
			/**
			 * Reference to element workList
			 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
			 */
			workList: v.optional(WorkListSchema),
		}),
	]),
);

export type MeiHeadData = v.InferOutput<typeof MeiHeadSchema>;

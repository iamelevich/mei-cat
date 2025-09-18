import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { ManifestationListSchema } from "../frbr";
import {
	AttrBasicSchema,
	AttrBiblSchema,
	AttrLabelledSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
} from "../shared";
import { AttrLangSchema } from "../shared/attr/lang";
import { AltIdSchema } from "./altId";
import { EncodingDescSchema } from "./encodingDesc";
import { ExtMetaSchema } from "./extMeta";
import { FileDescSchema } from "./fileDesc";
import { RevisionDescSchema } from "./revisionDesc";
import { WorkListSchema } from "./workList";

/**
 * Simplified schema for meiHead element.
 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
 */
export const MeiHeadSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrBiblSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLangSchema.entries,
	...AttrMeiVersionSchema.entries,
	...AttrResponsibilitySchema.entries,

	/**
	 * Specifies the kind of document to which the header is attached,
	 * for example whether it is a corpus or individual text.
	 * Allowed values are:
	 *   - `music` (Header is attached to a music document.),
	 *   - `corpus` (Header is attached to a corpus.),
	 *   - `independent` (Header is independent; not attached to either a music or a corpus document.)
	 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html#type
	 */
	"@type": v.optional(
		v.union([
			v.literal("music"),
			v.literal("corpus"),
			v.literal("independent"),
		]),
	),

	/**
	 * May contain a bibliographic identifier that does not fit within the meiHead element's id attribute, for example because the identifier does not fit the definition of an XML id or because multiple identifiers are needed.
	 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
	 */
	altId: v.optional(
		v.union([v.lazy(() => AltIdSchema), v.array(v.lazy(() => AltIdSchema))]),
	),

	/**
	 * Contains a full bibliographic description of the MEI file.
	 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
	 */
	fileDesc: v.lazy(() => FileDescSchema),

	/**
	 * Documents the relationship between an electronic file and the source or sources from which it was derived as well as applications used in the encoding/editing process.
	 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
	 */
	encodingDesc: v.optional(v.lazy(() => EncodingDescSchema)),

	/**
	 * Grouping mechanism for information describing non-bibliographic aspects of a text.
	 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
	 */
	workList: v.optional(v.lazy(() => WorkListSchema)),

	/**
	 * A container for the descriptions of physical embodiments of an expression of a work.
	 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
	 */
	manifestationList: v.optional(v.lazy(() => ManifestationListSchema)),

	/**
	 * Provides a container element for non-MEI metadata formats.
	 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
	 */
	extMeta: v.optional(
		v.union([
			v.lazy(() => ExtMetaSchema),
			v.array(v.lazy(() => ExtMetaSchema)),
		]),
	),

	/**
	 * Container for information about alterations that have been made to an MEI file.
	 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
	 */
	revisionDesc: v.optional(v.lazy(() => RevisionDescSchema)),
});

export type MeiHeadData = v.InferOutput<typeof MeiHeadSchema>;

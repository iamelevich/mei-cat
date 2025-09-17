import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBasicSchema } from "../shared/attr/basic";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrLabelledSchema } from "../shared/attr/labelled";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrMeiVersionSchema } from "../shared/attr/meiVersion";
import { AttrResponsibilitySchema } from "../shared/attr/responsibility";

/**
 * Supplies the descriptive and declarative metadata prefixed to every MEI-conformant text.
 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
 */
export const MeiHeadSchema = Type.Intersect([
	StandardTagSchema,
	AttrBasicSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
	AttrLangSchema,
	AttrLabelledSchema,
	AttrBiblSchema,
	Type.Object({
		/**
		 * Specifies the kind of document to which the header is attached, for example whether it is a corpus or individual text.
		 * Allowed values are:
		 *   "music" (Header is attached to a music document.),
		 *   "corpus" (Header is attached to a corpus.),
		 *   "independent" (Header is independent; not attached to either a music or a corpus document.)
		 */
		"@type": Type.Optional(
			Type.Union([
				Type.Literal("music"),
				Type.Literal("corpus"),
				Type.Literal("independent"),
			]),
		),
		/**
		 * May contain a bibliographic identifier that does not fit within the meiHead element's id attribute, for example because the identifier does not fit the definition of an XML id or because multiple identifiers are needed.
		 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
		 */
		altId: Type.Optional(
			Type.Union([Type.Ref("altId"), Type.Array(Type.Ref("altId"))]),
		),
		/**
		 * Contains a full bibliographic description of the MEI file.
		 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
		 */
		fileDesc: Type.Ref("fileDesc"),
		/**
		 * Documents the relationship between an electronic file and the source or sources from which it was derived as well as applications used in the encoding/editing process.
		 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
		 */
		encodingDesc: Type.Optional(Type.Ref("encodingDesc")),
		/**
		 * Grouping mechanism for information describing non-bibliographic aspects of a text.
		 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
		 */
		workList: Type.Optional(Type.Ref("workList")),
		/**
		 * A container for the descriptions of physical embodiments of an expression of a work.
		 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
		 */
		manifestationList: Type.Optional(Type.Ref("manifestationList")),
		/**
		 * Provides a container element for non-MEI metadata formats.
		 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
		 */
		extMeta: Type.Optional(
			Type.Union([Type.Ref("extMeta"), Type.Array(Type.Ref("extMeta"))]),
		),
		/**
		 * Container for information about alterations that have been made to an MEI file.
		 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
		 */
		revisionDesc: Type.Optional(Type.Ref("revisionDesc")),
	}),
]);

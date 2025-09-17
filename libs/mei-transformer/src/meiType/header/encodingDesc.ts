import { Type } from "typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Documents the relationship between an electronic file and the source or sources from which it was derived as well
 * as applications used in the encoding/editing process.
 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
 */
export const EncodingDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * Groups information about applications which have acted upon the MEI file.
			 * @see https://music-encoding.org/guidelines/v5/elements/appInfo.html
			 */
			appInfo: Type.Optional(Type.Ref("appInfo")),
			/**
			 * Used to provide details of editorial principles and practices applied during the encoding of musical text.
			 * @see https://music-encoding.org/guidelines/v5/elements/editorialDecl.html
			 */
			editorialDecl: Type.Optional(NotImplementedTagSchema),
			/**
			 * Project-level meta-data describing the aim or purpose for which the electronic file was encoded, funding agencies, etc. together with any other relevant information concerning the process by which it was assembled or collected.
			 * @see https://music-encoding.org/guidelines/v5/elements/projectDesc.html
			 */
			projectDesc: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains a prose description of the rationale and methods used in sampling texts in the creation of a corpus or collection.
			 * @see https://music-encoding.org/guidelines/v5/elements/samplingDecl.html
			 */
			samplingDecl: Type.Optional(NotImplementedTagSchema),
			/**
			 * Indicates which domains are included in the encoding.
			 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html
			 */
			domainsDecl: Type.Optional(NotImplementedTagSchema),
			/**
			 * Provides detailed information about the tagging applied to a document.
			 * @see https://music-encoding.org/guidelines/v5/elements/tagsDecl.html
			 */
			tagsDecl: Type.Optional(NotImplementedTagSchema),
			/**
			 * Groups information which describes the nature or topic of an entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/classDecls.html
			 */
			classDecls: Type.Optional(NotImplementedTagSchema),
		},
		{ additionalProperties: false },
	),
]);

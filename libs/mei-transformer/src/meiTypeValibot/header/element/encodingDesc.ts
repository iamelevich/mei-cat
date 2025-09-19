import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import {
	AppInfoSchema,
	ClassDeclsSchema,
	DomainsDeclSchema,
	EditorialDeclSchema,
	ProjectDescSchema,
	SamplingDeclSchema,
	TagsDeclSchema,
} from ".";

/**
 * Base schema with attribute, to simplify types for EncodingDescSchema
 */
const EncodingDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Documents the relationship between an electronic file and the source or sources from which it was derived as well as applications used in the encoding/editing process.
 * @see https://music-encoding.org/guidelines/v5/elements/encodingDesc.html
 */
export const EncodingDescSchema = v.intersect([
	EncodingDescBaseSchema,
	v.object({
		/**
		 * Reference to element appInfo
		 * @see https://music-encoding.org/guidelines/v5/elements/appInfo.html
		 */
		appInfo: v.optional(v.lazy(() => AppInfoSchema)),
		/**
		 * Reference to element classDecls
		 * @see https://music-encoding.org/guidelines/v5/elements/classDecls.html
		 */
		classDecls: v.optional(v.lazy(() => ClassDeclsSchema)),
		/**
		 * Reference to element domainsDecl
		 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html
		 */
		domainsDecl: v.optional(
			v.union([
				v.lazy(() => DomainsDeclSchema),
				v.array(v.lazy(() => DomainsDeclSchema)),
			]),
		),
		/**
		 * Reference to element editorialDecl
		 * @see https://music-encoding.org/guidelines/v5/elements/editorialDecl.html
		 */
		editorialDecl: v.optional(v.lazy(() => EditorialDeclSchema)),
		/**
		 * Reference to element projectDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/projectDesc.html
		 */
		projectDesc: v.optional(v.lazy(() => ProjectDescSchema)),
		/**
		 * Reference to element samplingDecl
		 * @see https://music-encoding.org/guidelines/v5/elements/samplingDecl.html
		 */
		samplingDecl: v.optional(v.lazy(() => SamplingDeclSchema)),
		/**
		 * Reference to element tagsDecl
		 * @see https://music-encoding.org/guidelines/v5/elements/tagsDecl.html
		 */
		tagsDecl: v.optional(v.lazy(() => TagsDeclSchema)),
	}),
	ModelHeadLikeSchema,
]);

export type EncodingDescData = v.InferOutput<typeof EncodingDescSchema>;

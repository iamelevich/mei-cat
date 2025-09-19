import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { AppInfoSchema } from "../element/appInfo";
import { ClassDeclsSchema } from "../element/classDecls";
import { DomainsDeclSchema } from "../element/domainsDecl";
import { EditorialDeclSchema } from "../element/editorialDecl";
import { ProjectDescSchema } from "../element/projectDesc";
import { SamplingDeclSchema } from "../element/samplingDecl";
import { TagsDeclSchema } from "../element/tagsDecl";

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
export const EncodingDescSchema = v.lazy(() =>
	v.intersect([
		EncodingDescBaseSchema,
		v.object({
			/**
			 * Reference to element appInfo
			 * @see https://music-encoding.org/guidelines/v5/elements/appInfo.html
			 */
			appInfo: v.optional(AppInfoSchema),
			/**
			 * Reference to element classDecls
			 * @see https://music-encoding.org/guidelines/v5/elements/classDecls.html
			 */
			classDecls: v.optional(ClassDeclsSchema),
			/**
			 * Reference to element domainsDecl
			 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html
			 */
			domainsDecl: v.optional(
				v.union([v.array(DomainsDeclSchema), DomainsDeclSchema]),
			),
			/**
			 * Reference to element editorialDecl
			 * @see https://music-encoding.org/guidelines/v5/elements/editorialDecl.html
			 */
			editorialDecl: v.optional(EditorialDeclSchema),
			/**
			 * Reference to element projectDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/projectDesc.html
			 */
			projectDesc: v.optional(ProjectDescSchema),
			/**
			 * Reference to element samplingDecl
			 * @see https://music-encoding.org/guidelines/v5/elements/samplingDecl.html
			 */
			samplingDecl: v.optional(SamplingDeclSchema),
			/**
			 * Reference to element tagsDecl
			 * @see https://music-encoding.org/guidelines/v5/elements/tagsDecl.html
			 */
			tagsDecl: v.optional(TagsDeclSchema),
		}),
		ModelHeadLikeSchema,
	]),
);

export type EncodingDescData = v.InferOutput<typeof EncodingDescSchema>;

import * as v from "valibot";
import {
	type AppInfoData,
	AppInfoSchema,
	type EditorialDeclData,
	EditorialDeclSchema,
	type ProjectDescData,
	ProjectDescSchema,
	type SamplingDeclData,
	SamplingDeclSchema,
} from "..";

/**
 * Groups elements that may appear as part of the description of the encoding process.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.encodingPart.html
 */
export const ModelEncodingPartSchema: v.GenericSchema<ModelEncodingPartData> =
	v.object({
		/**
		 * Groups information about applications which have acted upon the MEI file.
		 * @see https://music-encoding.org/guidelines/v5/elements/appInfo.html
		 */
		appInfo: v.optional(
			v.union([
				v.lazy(() => AppInfoSchema),
				v.array(v.lazy(() => AppInfoSchema)),
			]),
		),
		/**
		 * Used to provide details of editorial principles and practices applied during the encoding of musical text.
		 * @see https://music-encoding.org/guidelines/v5/elements/editorialDecl.html
		 */
		editorialDecl: v.optional(
			v.union([
				v.lazy(() => EditorialDeclSchema),
				v.array(v.lazy(() => EditorialDeclSchema)),
			]),
		),
		/**
		 * Project-level meta-data describing the aim or purpose for which the electronic file was encoded, funding agencies, etc. together with any other relevant information concerning the process by which it was assembled or collected.
		 * @see https://music-encoding.org/guidelines/v5/elements/projectDesc.html
		 */
		projectDesc: v.optional(
			v.union([
				v.lazy(() => ProjectDescSchema),
				v.array(v.lazy(() => ProjectDescSchema)),
			]),
		),
		/**
		 * Contains a prose description of the rationale and methods used in sampling texts in the creation of a corpus or collection.
		 * @see https://music-encoding.org/guidelines/v5/elements/samplingDecl.html
		 */
		samplingDecl: v.optional(
			v.union([
				v.lazy(() => SamplingDeclSchema),
				v.array(v.lazy(() => SamplingDeclSchema)),
			]),
		),
	});

export type ModelEncodingPartData = {
	appInfo?: AppInfoData | AppInfoData[];
	editorialDecl?: EditorialDeclData | EditorialDeclData[];
	projectDesc?: ProjectDescData | ProjectDescData[];
	samplingDecl?: SamplingDeclData | SamplingDeclData[];
};

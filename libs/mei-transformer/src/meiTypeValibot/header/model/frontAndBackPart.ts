import * as v from "valibot";
import { type TitlePageData, TitlePageSchema } from "../../shared";

/**
 * Groups elements that may appear as part of auxiliary material preceding or following the text proper.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.frontAndBackPart.html
 */
export const ModelFrontAndBackPartSchema: v.GenericSchema<ModelFrontAndBackPartData> =
	v.object({
		/**
		 * Contains a transcription of the title page of a text.
		 * @see https://music-encoding.org/guidelines/v5/elements/titlePage.html
		 */
		titlePage: v.optional(
			v.union([
				v.lazy(() => TitlePageSchema),
				v.array(v.lazy(() => TitlePageSchema)),
			]),
		),
	});

export type ModelFrontAndBackPartData = {
	titlePage?: TitlePageData | TitlePageData[];
};

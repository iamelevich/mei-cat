import * as v from "valibot";
import { type ChoiceData, ChoiceSchema, type SubstData, SubstSchema } from "..";

/**
 * Groups elements for editorial interventions that may be useful both in transcribing and in authoring processes.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editLike.html
 */
export const ModelEditLikeSchema: v.GenericSchema<ModelEditLikeData> = v.object(
	{
		/**
		 * Groups a number of alternative encodings for the same point in a text.
		 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
		 */
		choice: v.optional(
			v.union([
				v.lazy(() => ChoiceSchema),
				v.array(v.lazy(() => ChoiceSchema)),
			]),
		),
		/**
		 * Groups transcriptional elements when the combination is to be regarded as a single intervention in the text.
		 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
		 */
		subst: v.optional(
			v.union([v.lazy(() => SubstSchema), v.array(v.lazy(() => SubstSchema))]),
		),
	},
);

export type ModelEditLikeData = {
	choice?: ChoiceData | ChoiceData[];
	subst?: SubstData | SubstData[];
};

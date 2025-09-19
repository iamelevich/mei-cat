import * as v from "valibot";
import { type PeriodNameData, PeriodNameSchema } from "../element/periodName";
import { type StyleNameData, StyleNameSchema } from "../element/styleName";

/**
 * Groups elements that serve as stylistic labels.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.label.html
 */
export const ModelNameLikeLabelSchema: v.GenericSchema<ModelNameLikeLabelData> =
	v.lazy(() =>
		v.object({
			/**
			 * A label that describes a period of time, such as 'Baroque' or '3rd Style period'.
			 * @see https://music-encoding.org/guidelines/v5/elements/periodName.html
			 */
			periodName: v.optional(
				v.union([PeriodNameSchema, v.array(PeriodNameSchema)]),
			),
			/**
			 * A label for a characteristic style of writing or performance, such as 'bebop' or 'rock-n-roll'.
			 * @see https://music-encoding.org/guidelines/v5/elements/styleName.html
			 */
			styleName: v.optional(
				v.union([StyleNameSchema, v.array(StyleNameSchema)]),
			),
		}),
	);

export type ModelNameLikeLabelData = {
	periodName?: PeriodNameData | PeriodNameData[];
	styleName?: StyleNameData | StyleNameData[];
};

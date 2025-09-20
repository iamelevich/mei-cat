import * as v from "valibot";
import { type LabelData, LabelSchema } from "../element/label";
import { type LabelAbbrData, LabelAbbrSchema } from "../element/labelAbbr";

/**
 * Groups elements used to assign a label to other parts of a document.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.labelLike.html
 */
export const ModelLabelLikeSchema: v.GenericSchema<ModelLabelLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * A container for document text that identifies the feature to which it is attached. For a &#34;tool tip&#34; or other generated label, use the label attribute.
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.optional(v.union([v.array(LabelSchema), LabelSchema])),
			/**
			 * A label on the pages following the first.
			 * @see https://music-encoding.org/guidelines/v5/elements/labelAbbr.html
			 */
			labelAbbr: v.optional(
				v.union([v.array(LabelAbbrSchema), LabelAbbrSchema]),
			),
		}),
);

export type ModelLabelLikeData = {
	label?: LabelData | LabelData[];
	labelAbbr?: LabelAbbrData | LabelAbbrData[];
};

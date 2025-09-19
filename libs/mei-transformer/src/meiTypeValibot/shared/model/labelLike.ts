import * as v from "valibot";
import {
	type LabelData,
	LabelSchema,
	type LabelAbbrData,
	LabelAbbrSchema,
} from "..";

/**
 * Groups elements used to assign a label to other parts of a document.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.labelLike.html
 */
export const ModelLabelLikeSchema: v.GenericSchema<ModelLabelLikeData> =
	v.object({
		/**
		 * A container for document text that identifies the feature to which it is attached. For a &#34;tool tip&#34; or other generated label, use the label attribute.
		 * @see https://music-encoding.org/guidelines/v5/elements/label.html
		 */
		label: v.optional(
			v.union([v.lazy(() => LabelSchema), v.array(v.lazy(() => LabelSchema))]),
		),
		/**
		 * A label on the pages following the first.
		 * @see https://music-encoding.org/guidelines/v5/elements/labelAbbr.html
		 */
		labelAbbr: v.optional(
			v.union([
				v.lazy(() => LabelAbbrSchema),
				v.array(v.lazy(() => LabelAbbrSchema)),
			]),
		),
	});

export type ModelLabelLikeData = {
	label?: LabelData | LabelData[];
	labelAbbr?: LabelAbbrData | LabelAbbrData[];
};

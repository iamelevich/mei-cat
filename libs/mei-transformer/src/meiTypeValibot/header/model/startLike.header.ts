import * as v from "valibot";
import { type MeiHeadData, MeiHeadSchema } from "..";

/**
 * Groups elements that may be document elements when the header module is invoked.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.startLike.header.html
 */
export const ModelStartLikeHeaderSchema: v.GenericSchema<ModelStartLikeHeaderData> =
	v.object({
		/**
		 * Supplies the descriptive and declarative metadata prefixed to every MEI-conformant text.
		 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
		 */
		meiHead: v.optional(
			v.union([
				v.lazy(() => MeiHeadSchema),
				v.array(v.lazy(() => MeiHeadSchema)),
			]),
		),
	});

export type ModelStartLikeHeaderData = {
	meiHead?: MeiHeadData | MeiHeadData[];
};

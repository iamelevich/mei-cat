import * as v from "valibot";
import { type AppData, AppSchema } from "../element/app";

/**
 * Groups elements that contain a critical apparatus entry.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.appLike.html
 */
export const ModelAppLikeSchema: v.GenericSchema<ModelAppLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Contains one or more alternative encodings.
			 * @see https://music-encoding.org/guidelines/v5/elements/app.html
			 */
			app: v.optional(v.union([v.array(AppSchema), AppSchema])),
		}),
);

export type ModelAppLikeData = {
	app?: AppData | AppData[];
};

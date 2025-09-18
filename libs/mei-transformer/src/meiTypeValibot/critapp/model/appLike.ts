import * as v from "valibot";
import { type AppData, AppSchema } from "../app";

/**
 * Groups elements that represent app-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.appLike.html
 */
export const AppLikeSchema: v.GenericSchema<AppLikeData> = v.object({
	/**
	 * Contains one or more alternative encodings for the same point in a text.
	 * @see https://music-encoding.org/guidelines/v5/elements/app.html
	 */
	app: v.optional(
		v.union([v.lazy(() => AppSchema), v.array(v.lazy(() => AppSchema))]),
	),
});

export type AppLikeData = {
	app?: AppData | AppData[];
};

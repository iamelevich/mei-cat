import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelHeadLikeSchema } from "../../shared";
import { ApplicationSchema } from ".";

/**
 * Base schema with attribute, to simplify types for AppInfoSchema
 */
const AppInfoBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Groups information about applications which have acted upon the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/appInfo.html
 */
export const AppInfoSchema = v.intersect([
	AppInfoBaseSchema,
	v.object({
		/**
		 * Reference to element application
		 * @see https://music-encoding.org/guidelines/v5/elements/application.html
		 */
		application: v.optional(
			v.union([
				v.lazy(() => ApplicationSchema),
				v.array(v.lazy(() => ApplicationSchema)),
			]),
		),
	}),
	ModelHeadLikeSchema,
]);

export type AppInfoData = v.InferOutput<typeof AppInfoSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ApplicationSchema } from "../element/application";

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
export const AppInfoSchema = v.lazy(() =>
	v.intersect([
		AppInfoBaseSchema,
		v.object({
			/**
			 * Reference to element application
			 * @see https://music-encoding.org/guidelines/v5/elements/application.html
			 */
			application: v.optional(
				v.union([ApplicationSchema, v.array(ApplicationSchema)]),
			),
		}),
		ModelHeadLikeSchema,
	]),
);

export type AppInfoData = v.InferOutput<typeof AppInfoSchema>;

import * as v from "valibot";
import {
	type PgDescData,
	PgDescSchema,
	type PgFootData,
	PgFootSchema,
	type PgHeadData,
	PgHeadSchema,
} from "..";

/**
 * Groups elements that contain meta-data about a single page.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.metaLike.page.html
 */
export const MacroMetaLikePageSchema: v.GenericSchema<MacroMetaLikePageData> =
	v.object({
		/**
		 * Reference to element pgDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/pgDesc.html
		 */
		pgDesc: v.optional(v.lazy(() => PgDescSchema)),
		/**
		 * Reference to element pgFoot
		 * @see https://music-encoding.org/guidelines/v5/elements/pgFoot.html
		 */
		pgFoot: v.optional(v.lazy(() => PgFootSchema)),
		/**
		 * Reference to element pgHead
		 * @see https://music-encoding.org/guidelines/v5/elements/pgHead.html
		 */
		pgHead: v.optional(v.lazy(() => PgHeadSchema)),
	});

export type MacroMetaLikePageData = {
	pgDesc?: PgDescData;
	pgFoot?: PgFootData;
	pgHead?: PgHeadData;
};

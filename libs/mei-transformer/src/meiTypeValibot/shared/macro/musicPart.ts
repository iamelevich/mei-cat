import * as v from "valibot";
import {
	type ModelBackLikeData,
	ModelBackLikeSchema,
	type ModelFrontLikeData,
	ModelFrontLikeSchema,
} from "../../text";
import { type BodyData, BodySchema, type GroupData, GroupSchema } from "..";

/**
 * Groups elements that may appear as part of the music element.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.musicPart.html
 */
export const MacroMusicPartSchema: v.GenericSchema<MacroMusicPartData> =
	v.intersect([
		v.object({
			/**
			 * Reference to element body
			 * @see https://music-encoding.org/guidelines/v5/elements/body.html
			 */
			body: v.optional(v.lazy(() => BodySchema)),
			/**
			 * Reference to element group
			 * @see https://music-encoding.org/guidelines/v5/elements/group.html
			 */
			group: v.optional(v.lazy(() => GroupSchema)),
		}),
		ModelBackLikeSchema,
		ModelFrontLikeSchema,
	]);

export type MacroMusicPartData = {
	body?: BodyData;
	group?: GroupData;
} & ModelBackLikeData &
	ModelFrontLikeData;

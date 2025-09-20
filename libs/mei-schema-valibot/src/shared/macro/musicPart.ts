import * as v from "valibot";
import {
	type ModelBackLikeData,
	ModelBackLikeSchema,
} from "../../text/model/backLike";
import {
	type ModelFrontLikeData,
	ModelFrontLikeSchema,
} from "../../text/model/frontLike";
import { type BodyData, BodySchema } from "../element/body";
import { type GroupData, GroupSchema } from "../element/group";

/**
 * Groups elements that may appear as part of the music element.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.musicPart.html
 */
export const MacroMusicPartSchema: v.GenericSchema<MacroMusicPartData> = v.lazy(
	() =>
		v.intersect([
			v.object({
				/**
				 * Reference to element body
				 * @see https://music-encoding.org/guidelines/v5/elements/body.html
				 */
				body: v.optional(BodySchema),
				/**
				 * Reference to element group
				 * @see https://music-encoding.org/guidelines/v5/elements/group.html
				 */
				group: v.optional(GroupSchema),
			}),
			ModelBackLikeSchema,
			ModelFrontLikeSchema,
		]),
);

export type MacroMusicPartData = {
	body?: BodyData;
	group?: GroupData;
} & ModelBackLikeData &
	ModelFrontLikeData;

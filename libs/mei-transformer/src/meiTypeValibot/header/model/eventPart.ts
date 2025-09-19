import * as v from "valibot";
import {
	type ModelNameLikeAgentData,
	ModelNameLikeAgentSchema,
} from "../../namesdates/model/nameLike.agent";
import {
	type ModelNameLikeGeogNameData,
	ModelNameLikeGeogNameSchema,
} from "../../namesdates/model/nameLike.geogName";
import { type DescData, DescSchema } from "../../shared/element/desc";
import { type NameData, NameSchema } from "../../shared/element/name";
import {
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
} from "../../shared/model/addressLike";
import {
	type ModelDateLikeData,
	ModelDateLikeSchema,
} from "../../shared/model/dateLike";

/**
 * Groups elements that may be used to provide a structured description of an event.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventPart.html
 */
export const ModelEventPartSchema: v.GenericSchema<ModelEventPartData> = v.lazy(
	() =>
		v.intersect([
			v.object({
				/**
				 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
				 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
				 */
				desc: v.optional(v.union([v.array(DescSchema), DescSchema])),
				/**
				 * Proper noun or noun phrase.
				 * @see https://music-encoding.org/guidelines/v5/elements/name.html
				 */
				name: v.optional(v.union([v.array(NameSchema), NameSchema])),
			}),
			ModelAddressLikeSchema,
			ModelDateLikeSchema,
			ModelNameLikeAgentSchema,
			ModelNameLikeGeogNameSchema,
		]),
);

export type ModelEventPartData = {
	desc?: DescData | DescData[];
	name?: NameData | NameData[];
} & ModelAddressLikeData &
	ModelDateLikeData &
	ModelNameLikeAgentData &
	ModelNameLikeGeogNameData;

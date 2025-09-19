import * as v from "valibot";
import {
	type ModelNameLikeAgentData,
	ModelNameLikeAgentSchema,
	type ModelNameLikeGeogNameData,
	ModelNameLikeGeogNameSchema,
} from "../../namesdates";
import {
	type DescData,
	DescSchema,
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
	type ModelDateLikeData,
	ModelDateLikeSchema,
	type NameData,
	NameSchema,
} from "../../shared";

/**
 * Groups elements that may be used to provide a structured description of an event.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventPart.html
 */
export const ModelEventPartSchema: v.GenericSchema<ModelEventPartData> =
	v.intersect([
		v.object({
			/**
			 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(
				v.union([v.lazy(() => DescSchema), v.array(v.lazy(() => DescSchema))]),
			),
			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: v.optional(
				v.union([v.lazy(() => NameSchema), v.array(v.lazy(() => NameSchema))]),
			),
		}),
		ModelAddressLikeSchema,
		ModelDateLikeSchema,
		ModelNameLikeAgentSchema,
		ModelNameLikeGeogNameSchema,
	]);

export type ModelEventPartData = {
	desc?: DescData | DescData[];
	name?: NameData | NameData[];
} & ModelAddressLikeData &
	ModelDateLikeData &
	ModelNameLikeAgentData &
	ModelNameLikeGeogNameData;

import * as v from "valibot";
import { type AvailabilityData, AvailabilitySchema } from "..";
import {
	type DistributorData,
	DistributorSchema,
	type PubPlaceData,
	PubPlaceSchema,
	type PublisherData,
	PublisherSchema,
	type RespStmtData,
	RespStmtSchema,
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
	type ModelDateLikeData,
	ModelDateLikeSchema,
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
} from "../../shared";

/**
 * Groups elements that may appear as part of the publication statement for a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.pubStmtPart.html
 */
export const ModelPubStmtPartSchema: v.GenericSchema<ModelPubStmtPartData> =
	v.intersect([
		v.object({
			/**
			 * Groups elements that describe the availability of and access to a bibliographic item, including an MEI-encoded document.
			 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
			 */
			availability: v.optional(
				v.union([
					v.lazy(() => AvailabilitySchema),
					v.array(v.lazy(() => AvailabilitySchema)),
				]),
			),
			/**
			 * Person or agency, other than a publisher, from which access (including electronic access) to a bibliographic entity may be obtained.
			 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
			 */
			distributor: v.optional(
				v.union([
					v.lazy(() => DistributorSchema),
					v.array(v.lazy(() => DistributorSchema)),
				]),
			),
			/**
			 * Name of the place where a bibliographic item was published.
			 * @see https://music-encoding.org/guidelines/v5/elements/pubPlace.html
			 */
			pubPlace: v.optional(
				v.union([
					v.lazy(() => PubPlaceSchema),
					v.array(v.lazy(() => PubPlaceSchema)),
				]),
			),
			/**
			 * Name of the organization responsible for the publication of a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/publisher.html
			 */
			publisher: v.optional(
				v.union([
					v.lazy(() => PublisherSchema),
					v.array(v.lazy(() => PublisherSchema)),
				]),
			),
			/**
			 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes, responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.optional(
				v.union([
					v.lazy(() => RespStmtSchema),
					v.array(v.lazy(() => RespStmtSchema)),
				]),
			),
		}),
		ModelAddressLikeSchema,
		ModelDateLikeSchema,
		ModelIdentifierLikeSchema,
	]);

export type ModelPubStmtPartData = {
	availability?: AvailabilityData | AvailabilityData[];
	distributor?: DistributorData | DistributorData[];
	pubPlace?: PubPlaceData | PubPlaceData[];
	publisher?: PublisherData | PublisherData[];
	respStmt?: RespStmtData | RespStmtData[];
} & ModelAddressLikeData &
	ModelDateLikeData &
	ModelIdentifierLikeData;

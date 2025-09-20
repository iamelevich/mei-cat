import * as v from "valibot";
import {
	type DistributorData,
	DistributorSchema,
} from "../../shared/element/distributor";
import {
	type PublisherData,
	PublisherSchema,
} from "../../shared/element/publisher";
import {
	type PubPlaceData,
	PubPlaceSchema,
} from "../../shared/element/pubPlace";
import {
	type RespStmtData,
	RespStmtSchema,
} from "../../shared/element/respStmt";
import {
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
} from "../../shared/model/addressLike";
import {
	type ModelDateLikeData,
	ModelDateLikeSchema,
} from "../../shared/model/dateLike";
import {
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
} from "../../shared/model/identifierLike";
import {
	type AvailabilityData,
	AvailabilitySchema,
} from "../element/availability";

/**
 * Groups elements that may appear as part of the publication statement for a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.pubStmtPart.html
 */
export const ModelPubStmtPartSchema: v.GenericSchema<ModelPubStmtPartData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Groups elements that describe the availability of and access to a bibliographic item, including an MEI-encoded document.
				 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
				 */
				availability: v.optional(
					v.union([v.array(AvailabilitySchema), AvailabilitySchema]),
				),
				/**
				 * Person or agency, other than a publisher, from which access (including electronic access) to a bibliographic entity may be obtained.
				 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
				 */
				distributor: v.optional(
					v.union([v.array(DistributorSchema), DistributorSchema]),
				),
				/**
				 * Name of the place where a bibliographic item was published.
				 * @see https://music-encoding.org/guidelines/v5/elements/pubPlace.html
				 */
				pubPlace: v.optional(
					v.union([v.array(PubPlaceSchema), PubPlaceSchema]),
				),
				/**
				 * Name of the organization responsible for the publication of a bibliographic item.
				 * @see https://music-encoding.org/guidelines/v5/elements/publisher.html
				 */
				publisher: v.optional(
					v.union([v.array(PublisherSchema), PublisherSchema]),
				),
				/**
				 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes, responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
				 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
				 */
				respStmt: v.optional(
					v.union([v.array(RespStmtSchema), RespStmtSchema]),
				),
			}),
			ModelAddressLikeSchema,
			ModelDateLikeSchema,
			ModelIdentifierLikeSchema,
		]),
	);

export type ModelPubStmtPartData = {
	availability?: AvailabilityData | AvailabilityData[];
	distributor?: DistributorData | DistributorData[];
	pubPlace?: PubPlaceData | PubPlaceData[];
	publisher?: PublisherData | PublisherData[];
	respStmt?: RespStmtData | RespStmtData[];
} & ModelAddressLikeData &
	ModelDateLikeData &
	ModelIdentifierLikeData;

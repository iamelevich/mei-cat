import * as v from "valibot";
import {
	type AvailabilityData,
	AvailabilitySchema,
} from "../../header/element/availability";
import { type UnpubData, UnpubSchema } from "../../header/element/unpub";
import {
	type DistributorData,
	DistributorSchema,
} from "../element/distributor";
import { type PublisherData, PublisherSchema } from "../element/publisher";
import { type PubPlaceData, PubPlaceSchema } from "../element/pubPlace";

/**
 * Groups elements that may appear as part of a bibliographic imprint.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.imprintPart.html
 */
export const ModelImprintPartSchema: v.GenericSchema<ModelImprintPartData> =
	v.lazy(() =>
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
			pubPlace: v.optional(v.union([v.array(PubPlaceSchema), PubPlaceSchema])),
			/**
			 * Name of the organization responsible for the publication of a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/publisher.html
			 */
			publisher: v.optional(
				v.union([v.array(PublisherSchema), PublisherSchema]),
			),
			/**
			 * Used to explicitly indicate that a bibliographic resource is unpublished.
			 * @see https://music-encoding.org/guidelines/v5/elements/unpub.html
			 */
			unpub: v.optional(v.union([v.array(UnpubSchema), UnpubSchema])),
		}),
	);

export type ModelImprintPartData = {
	availability?: AvailabilityData | AvailabilityData[];
	distributor?: DistributorData | DistributorData[];
	pubPlace?: PubPlaceData | PubPlaceData[];
	publisher?: PublisherData | PublisherData[];
	unpub?: UnpubData | UnpubData[];
};

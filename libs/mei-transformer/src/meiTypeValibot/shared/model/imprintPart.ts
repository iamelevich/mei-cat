import * as v from "valibot";
import {
	type AvailabilityData,
	AvailabilitySchema,
	type UnpubData,
	UnpubSchema,
} from "../../header";
import {
	type DistributorData,
	DistributorSchema,
	type PubPlaceData,
	PubPlaceSchema,
	type PublisherData,
	PublisherSchema,
} from "..";

/**
 * Groups elements that may appear as part of a bibliographic imprint.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.imprintPart.html
 */
export const ModelImprintPartSchema: v.GenericSchema<ModelImprintPartData> =
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
		 * Used to explicitly indicate that a bibliographic resource is unpublished.
		 * @see https://music-encoding.org/guidelines/v5/elements/unpub.html
		 */
		unpub: v.optional(
			v.union([v.lazy(() => UnpubSchema), v.array(v.lazy(() => UnpubSchema))]),
		),
	});

export type ModelImprintPartData = {
	availability?: AvailabilityData | AvailabilityData[];
	distributor?: DistributorData | DistributorData[];
	pubPlace?: PubPlaceData | PubPlaceData[];
	publisher?: PublisherData | PublisherData[];
	unpub?: UnpubData | UnpubData[];
};

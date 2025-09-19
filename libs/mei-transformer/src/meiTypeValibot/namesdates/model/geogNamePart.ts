import * as v from "valibot";
import {
	type BlocData,
	BlocSchema,
	type CountryData,
	CountrySchema,
	type DistrictData,
	DistrictSchema,
	type GeogFeatData,
	GeogFeatSchema,
	type RegionData,
	RegionSchema,
	type SettlementData,
	SettlementSchema,
} from "..";

/**
 * Groups elements which form part of a geographic name.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.geogNamePart.html
 */
export const ModelGeogNamePartSchema: v.GenericSchema<ModelGeogNamePartData> =
	v.object({
		/**
		 * Contains the name of a geopolitical unit consisting of two or more nation states or countries.
		 * @see https://music-encoding.org/guidelines/v5/elements/bloc.html
		 */
		bloc: v.optional(
			v.union([v.lazy(() => BlocSchema), v.array(v.lazy(() => BlocSchema))]),
		),
		/**
		 * Contains the name of a geopolitical unit, such as a nation, country, colony, or commonwealth, larger than or administratively superior to a region and smaller than a bloc.
		 * @see https://music-encoding.org/guidelines/v5/elements/country.html
		 */
		country: v.optional(
			v.union([
				v.lazy(() => CountrySchema),
				v.array(v.lazy(() => CountrySchema)),
			]),
		),
		/**
		 * Contains the name of any kind of subdivision of a settlement, such as a parish, ward, or other administrative or geographic unit.
		 * @see https://music-encoding.org/guidelines/v5/elements/district.html
		 */
		district: v.optional(
			v.union([
				v.lazy(() => DistrictSchema),
				v.array(v.lazy(() => DistrictSchema)),
			]),
		),
		/**
		 * Contains a common noun identifying a geographical feature.
		 * @see https://music-encoding.org/guidelines/v5/elements/geogFeat.html
		 */
		geogFeat: v.optional(
			v.union([
				v.lazy(() => GeogFeatSchema),
				v.array(v.lazy(() => GeogFeatSchema)),
			]),
		),
		/**
		 * Contains the name of an administrative unit such as a state, province, or county, larger than a settlement, but smaller than a country.
		 * @see https://music-encoding.org/guidelines/v5/elements/region.html
		 */
		region: v.optional(
			v.union([
				v.lazy(() => RegionSchema),
				v.array(v.lazy(() => RegionSchema)),
			]),
		),
		/**
		 * Contains the name of a settlement such as a city, town, or village identified as a single geopolitical or administrative unit.
		 * @see https://music-encoding.org/guidelines/v5/elements/settlement.html
		 */
		settlement: v.optional(
			v.union([
				v.lazy(() => SettlementSchema),
				v.array(v.lazy(() => SettlementSchema)),
			]),
		),
	});

export type ModelGeogNamePartData = {
	bloc?: BlocData | BlocData[];
	country?: CountryData | CountryData[];
	district?: DistrictData | DistrictData[];
	geogFeat?: GeogFeatData | GeogFeatData[];
	region?: RegionData | RegionData[];
	settlement?: SettlementData | SettlementData[];
};

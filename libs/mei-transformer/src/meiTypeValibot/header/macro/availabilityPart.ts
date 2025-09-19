import * as v from "valibot";
import {
	type AccessRestrictData,
	AccessRestrictSchema,
	type PriceData,
	PriceSchema,
	type SysReqData,
	SysReqSchema,
	type UseRestrictData,
	UseRestrictSchema,
} from "..";
import {
	type DistributorData,
	DistributorSchema,
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
	type ModelDateLikeData,
	ModelDateLikeSchema,
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
} from "../../shared";

/**
 * Groups elements that may appear as part of a description of the availability of and access to a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.availabilityPart.html
 */
export const MacroAvailabilityPartSchema: v.GenericSchema<MacroAvailabilityPartData> =
	v.intersect([
		v.object({
			/**
			 * Reference to element accessRestrict
			 * @see https://music-encoding.org/guidelines/v5/elements/accessRestrict.html
			 */
			accessRestrict: v.optional(
				v.union([
					v.lazy(() => AccessRestrictSchema),
					v.array(v.lazy(() => AccessRestrictSchema)),
				]),
			),
			/**
			 * Reference to element distributor
			 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
			 */
			distributor: v.optional(
				v.union([
					v.lazy(() => DistributorSchema),
					v.array(v.lazy(() => DistributorSchema)),
				]),
			),
			/**
			 * Reference to element price
			 * @see https://music-encoding.org/guidelines/v5/elements/price.html
			 */
			price: v.optional(
				v.union([
					v.lazy(() => PriceSchema),
					v.array(v.lazy(() => PriceSchema)),
				]),
			),
			/**
			 * Reference to element sysReq
			 * @see https://music-encoding.org/guidelines/v5/elements/sysReq.html
			 */
			sysReq: v.optional(
				v.union([
					v.lazy(() => SysReqSchema),
					v.array(v.lazy(() => SysReqSchema)),
				]),
			),
			/**
			 * Reference to element useRestrict
			 * @see https://music-encoding.org/guidelines/v5/elements/useRestrict.html
			 */
			useRestrict: v.optional(
				v.union([
					v.lazy(() => UseRestrictSchema),
					v.array(v.lazy(() => UseRestrictSchema)),
				]),
			),
		}),
		ModelAddressLikeSchema,
		ModelDateLikeSchema,
		ModelHeadLikeSchema,
		ModelIdentifierLikeSchema,
	]);

export type MacroAvailabilityPartData = {
	accessRestrict?: AccessRestrictData | AccessRestrictData[];
	distributor?: DistributorData | DistributorData[];
	price?: PriceData | PriceData[];
	sysReq?: SysReqData | SysReqData[];
	useRestrict?: UseRestrictData | UseRestrictData[];
} & ModelAddressLikeData &
	ModelDateLikeData &
	ModelHeadLikeData &
	ModelIdentifierLikeData;

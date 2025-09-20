import * as v from "valibot";
import {
	type DistributorData,
	DistributorSchema,
} from "../../shared/element/distributor";
import {
	type ModelAddressLikeData,
	ModelAddressLikeSchema,
} from "../../shared/model/addressLike";
import {
	type ModelDateLikeData,
	ModelDateLikeSchema,
} from "../../shared/model/dateLike";
import {
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
} from "../../shared/model/headLike";
import {
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
} from "../../shared/model/identifierLike";
import {
	type AccessRestrictData,
	AccessRestrictSchema,
} from "../element/accessRestrict";
import { type PriceData, PriceSchema } from "../element/price";
import { type SysReqData, SysReqSchema } from "../element/sysReq";
import {
	type UseRestrictData,
	UseRestrictSchema,
} from "../element/useRestrict";

/**
 * Groups elements that may appear as part of a description of the availability of and access to a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.availabilityPart.html
 */
export const MacroAvailabilityPartSchema: v.GenericSchema<MacroAvailabilityPartData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Reference to element accessRestrict
				 * @see https://music-encoding.org/guidelines/v5/elements/accessRestrict.html
				 */
				accessRestrict: v.optional(
					v.union([v.array(AccessRestrictSchema), AccessRestrictSchema]),
				),
				/**
				 * Reference to element distributor
				 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
				 */
				distributor: v.optional(
					v.union([v.array(DistributorSchema), DistributorSchema]),
				),
				/**
				 * Reference to element price
				 * @see https://music-encoding.org/guidelines/v5/elements/price.html
				 */
				price: v.optional(v.union([v.array(PriceSchema), PriceSchema])),
				/**
				 * Reference to element sysReq
				 * @see https://music-encoding.org/guidelines/v5/elements/sysReq.html
				 */
				sysReq: v.optional(v.union([v.array(SysReqSchema), SysReqSchema])),
				/**
				 * Reference to element useRestrict
				 * @see https://music-encoding.org/guidelines/v5/elements/useRestrict.html
				 */
				useRestrict: v.optional(
					v.union([v.array(UseRestrictSchema), UseRestrictSchema]),
				),
			}),
			ModelAddressLikeSchema,
			ModelDateLikeSchema,
			ModelHeadLikeSchema,
			ModelIdentifierLikeSchema,
		]),
	);

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

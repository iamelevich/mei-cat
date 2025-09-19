import * as v from "valibot";
import { type AddressData, AddressSchema } from "../element/address";

/**
 * Groups elements used to represent a postal address.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.addressLike.html
 */
export const ModelAddressLikeSchema: v.GenericSchema<ModelAddressLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Contains a postal address, for example of a publisher, an organization, or an individual.
			 * @see https://music-encoding.org/guidelines/v5/elements/address.html
			 */
			address: v.optional(v.union([v.array(AddressSchema), AddressSchema])),
		}),
	);

export type ModelAddressLikeData = {
	address?: AddressData | AddressData[];
};

import * as v from "valibot";
import { type PostBoxData, PostBoxSchema } from "../element/postBox";
import { type PostCodeData, PostCodeSchema } from "../element/postCode";
import { type StreetData, StreetSchema } from "../element/street";
import {
	type ModelGeogNamePartData,
	ModelGeogNamePartSchema,
} from "../model/geogNamePart";

/**
 * Groups elements used as part of a physical address.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.addressPart.html
 */
export const ModelAddressPartSchema: v.GenericSchema<ModelAddressPartData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Contains a number or other identifier for some postal delivery point other than a street address.
				 * @see https://music-encoding.org/guidelines/v5/elements/postBox.html
				 */
				postBox: v.optional(v.union([PostBoxSchema, v.array(PostBoxSchema)])),
				/**
				 * Contains a numerical or alphanumeric code used as part of a postal address to simplify sorting or delivery of mail.
				 * @see https://music-encoding.org/guidelines/v5/elements/postCode.html
				 */
				postCode: v.optional(
					v.union([PostCodeSchema, v.array(PostCodeSchema)]),
				),
				/**
				 * full street address including any name or number identifying a building as well as the name of the street or route on which it is located.
				 * @see https://music-encoding.org/guidelines/v5/elements/street.html
				 */
				street: v.optional(v.union([StreetSchema, v.array(StreetSchema)])),
			}),
			ModelGeogNamePartSchema,
		]),
	);

export type ModelAddressPartData = {
	postBox?: PostBoxData | PostBoxData[];
	postCode?: PostCodeData | PostCodeData[];
	street?: StreetData | StreetData[];
} & ModelGeogNamePartData;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelAddressPartSchema } from "../../namesdates/model/addressPart";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AddrLineSchema } from "../element/addrLine";

/**
 * Base schema with attribute, to simplify types for AddressSchema
 */
const AddressBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a postal address, for example of a publisher, an organization, or an individual.
 * @see https://music-encoding.org/guidelines/v5/elements/address.html
 */
export const AddressSchema = v.lazy(() =>
	v.intersect([
		AddressBaseSchema,
		v.object({
			/**
			 * Reference to element addrLine
			 * @see https://music-encoding.org/guidelines/v5/elements/addrLine.html
			 */
			addrLine: v.optional(v.union([v.array(AddrLineSchema), AddrLineSchema])),
		}),
		ModelAddressPartSchema,
	]),
);

export type AddressData = v.InferOutput<typeof AddressSchema>;

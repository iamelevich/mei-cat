import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelAddressPartSchema } from "../../namesdates";
import { AttrCommonSchema, AttrLangSchema } from "..";
import { AddrLineSchema } from ".";

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
export const AddressSchema = v.intersect([
	AddressBaseSchema,
	v.object({
		/**
		 * Reference to element addrLine
		 * @see https://music-encoding.org/guidelines/v5/elements/addrLine.html
		 */
		addrLine: v.union([
			v.lazy(() => AddrLineSchema),
			v.array(v.lazy(() => AddrLineSchema)),
		]),
	}),
	ModelAddressPartSchema,
]);

export type AddressData = v.InferOutput<typeof AddressSchema>;

import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Contains a postal address, for example of a publisher, an organization, or an individual.
 * @see https://music-encoding.org/guidelines/v5/elements/address.html
 */
export const AddressSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

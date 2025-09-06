import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AddressSchema } from "../shared/address";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { DateSchema } from "../shared/date";
// import { DistributorSchema } from "../shared/distributor";
import { HeadSchema } from "../shared/head";
import { IdentifierSchema } from "../shared/identifier";
import { AccessRestrictSchema } from "./accessRestrict";
import { PriceSchema } from "./price";
import { SysReqSchema } from "./sysReq";
import { UseRestrictSchema } from "./useRestrict";

/**
 * Groups elements that describe the availability of and access to a bibliographic item, including an MEI-encoded document.
 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
 */
export const AvailabilitySchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	Type.Object(
		{
			/**
			 * Describes the conditions that affect the accessibility of material.
			 * @see https://music-encoding.org/guidelines/v5/elements/accessRestrict.html
			 */
			accessRestrict: Type.Optional(
				Type.Union([AccessRestrictSchema, Type.Array(AccessRestrictSchema)]),
			),
			/**
			 * Contains a postal address, for example of a publisher, an organization, or an individual.
			 * @see https://music-encoding.org/guidelines/v5/elements/address.html
			 */
			address: Type.Optional(
				Type.Union([AddressSchema, Type.Array(AddressSchema)]),
			),
			/**
			 * A string identifying a point in time or the time period between two such points.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(Type.Union([DateSchema, Type.Array(DateSchema)])),
			/**
			 * Person or agency, other than a publisher, from which access (including electronic access) to a bibliographic entity may be obtained.
			 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
			 */
			distributor: Type.Optional(Type.String()),
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([IdentifierSchema, Type.Array(IdentifierSchema)]),
			),
			/**
			 * The cost of access to a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/price.html
			 */
			price: Type.Optional(Type.Union([PriceSchema, Type.Array(PriceSchema)])),
			/**
			 * System requirements for using the electronic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/sysReq.html
			 */
			sysReq: Type.Optional(
				Type.Union([SysReqSchema, Type.Array(SysReqSchema)]),
			),
			/**
			 * Container for information about the conditions that affect use of a bibliographic item after access has been granted.
			 * @see https://music-encoding.org/guidelines/v5/elements/useRestrict.html
			 */
			useRestrict: Type.Optional(
				Type.Union([UseRestrictSchema, Type.Array(UseRestrictSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type Availability = Static<typeof AvailabilitySchema>;

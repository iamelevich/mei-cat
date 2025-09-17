import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";

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
				Type.Union([
					Type.Ref("accessRestrict"),
					Type.Array(Type.Ref("accessRestrict")),
				]),
			),
			/**
			 * Contains a postal address, for example of a publisher, an organization, or an individual.
			 * @see https://music-encoding.org/guidelines/v5/elements/address.html
			 */
			address: Type.Optional(
				Type.Union([Type.Ref("address"), Type.Array(Type.Ref("address"))]),
			),
			/**
			 * A string identifying a point in time or the time period between two such points.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(
				Type.Union([Type.Ref("date"), Type.Array(Type.Ref("date"))]),
			),
			/**
			 * Person or agency, other than a publisher, from which access (including electronic access) to a bibliographic entity may be obtained.
			 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
			 */
			distributor: Type.Optional(Type.String()),
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([
					Type.Ref("identifier"),
					Type.Array(Type.Ref("identifier")),
				]),
			),
			/**
			 * The cost of access to a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/price.html
			 */
			price: Type.Optional(
				Type.Union([Type.Ref("price"), Type.Array(Type.Ref("price"))]),
			),
			/**
			 * System requirements for using the electronic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/sysReq.html
			 */
			sysReq: Type.Optional(
				Type.Union([Type.Ref("sysReq"), Type.Array(Type.Ref("sysReq"))]),
			),
			/**
			 * Container for information about the conditions that affect use of a bibliographic item after access has been granted.
			 * @see https://music-encoding.org/guidelines/v5/elements/useRestrict.html
			 */
			useRestrict: Type.Optional(
				Type.Union([
					Type.Ref("useRestrict"),
					Type.Array(Type.Ref("useRestrict")),
				]),
			),
		},
		{ additionalProperties: false },
	),
]);

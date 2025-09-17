import { Type } from "typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Container for information regarding the publication or distribution of a bibliographic item,
 * including the publisher's name and address, the date of publication, and other relevant details.
 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
 */
export const PubStmtSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * Used to explicitly indicate that a bibliographic resource is unpublished.
			 * @see https://music-encoding.org/guidelines/v5/elements/unpub.html
			 */
			unpub: Type.Optional(Type.Ref("unpub")),
			/**
			 * Name of the organization responsible for the publication of a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/publisher.html
			 */
			publisher: Type.Optional(NotImplementedTagSchema),
			/**
			 * Person or agency, other than a publisher, from which access (including electronic access) to a bibliographic entity may be obtained.
			 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
			 */
			distributor: Type.Optional(
				Type.Union([
					Type.Ref("distributor"),
					Type.Array(Type.Ref("distributor")),
				]),
			),
			/**
			 * Name of the place where a bibliographic item was published.
			 * @see https://music-encoding.org/guidelines/v5/elements/pubPlace.html
			 */
			pubPlace: Type.Optional(NotImplementedTagSchema),
			/**
			 * A string identifying a point in time or the time period between two such points.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(
				Type.Union([Type.Ref("date"), Type.Array(Type.Ref("date"))]),
			),
			/**
			 * Groups elements that describe the availability of and access to a bibliographic item, including an MEI-encoded document.
			 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
			 */
			availability: Type.Optional(
				Type.Union([
					Type.Ref("availability"),
					Type.Array(Type.Ref("availability")),
				]),
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
			 * Contains a postal address, for example of a publisher, an organization, or an individual.
			 * @see https://music-encoding.org/guidelines/v5/elements/address.html
			 */
			address: Type.Optional(
				Type.Union([Type.Ref("address"), Type.Array(Type.Ref("address"))]),
			),
			/**
			 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes, responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: Type.Optional(
				Type.Union([Type.Ref("respStmt"), Type.Array(Type.Ref("respStmt"))]),
			),
		},
		{ additionalProperties: false },
	),
]);

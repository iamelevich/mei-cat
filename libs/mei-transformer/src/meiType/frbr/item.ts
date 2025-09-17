import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrPointingSchema } from "../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../shared/attr/targetEval";

/**
 * Single instance or exemplar of a source/manifestation.
 * @see https://music-encoding.org/guidelines/v5/elements/item.html
 */
export const ItemSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),

			// rng:zeroOrMore - model.identifierLike
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

			// rng:optional - availability
			/**
			 * Groups elements that describe the availability of and access to a bibliographic item, including an MEI-encoded document.
			 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
			 */
			availability: Type.Optional(Type.Ref("availability")),

			// rng:optional - physDesc
			/**
			 * Container for information about the appearance, construction, or handling of physical materials, such as their dimension, quantity, color, style, and technique of creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
			 */
			physDesc: Type.Optional(Type.Ref("physdesc")),

			// rng:optional - physLoc
			/**
			 * Groups information about the current physical location of a bibliographic item, such as the repository in which it is located and its shelf mark(s), and its previous locations.
			 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
			 */
			physLoc: Type.Optional(Type.Ref("physloc")),

			// rng:optional - history
			/**
			 * Provides a container for information about the history of a resource other than the circumstances of its creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: Type.Optional(Type.Ref("history")),

			// rng:optional - notesStmt
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(Type.Ref("notesstmt")),

			// rng:optional - classification
			/**
			 * Groups information which describes the nature or topic of an entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
			 */
			classification: Type.Optional(Type.Ref("classification")),

			// rng:optional - componentList
			/**
			 * Container for intellectual or physical component parts of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
			 */
			componentList: Type.Optional(Type.Ref("componentlist")),

			// rng:optional - relationList
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(Type.Ref("relationlist")),

			// rng:zeroOrMore - extMeta
			/**
			 * Provides a container element for non-MEI metadata formats.
			 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
			 */
			extMeta: Type.Optional(
				Type.Union([Type.Ref("extmeta"), Type.Array(Type.Ref("extmeta"))]),
			),
		},
		{ additionalProperties: false },
	),
]);

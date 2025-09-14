import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AvailabilitySchema } from "../header/availability";
import { ClassificationSchema } from "../header/classification";
import { ExtMetaSchema } from "../header/extMeta";
import { HistorySchema } from "../header/history";
import { NotesStmtSchema } from "../header/notesStmt";
import { PhysDescSchema } from "../header/physDesc";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrPointingSchema } from "../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../shared/attr/targetEval";
import { HeadSchema } from "../shared/head";
import { IdentifierSchema } from "../shared/identifier";
import { PhysLocSchema } from "../shared/physLoc";
import { RelationListSchema } from "../shared/relationList";

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
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),

			// rng:zeroOrMore - model.identifierLike
			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([IdentifierSchema, Type.Array(IdentifierSchema)]),
			),

			// rng:optional - availability
			/**
			 * Groups elements that describe the availability of and access to a bibliographic item, including an MEI-encoded document.
			 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
			 */
			availability: Type.Optional(AvailabilitySchema),

			// rng:optional - physDesc
			/**
			 * Container for information about the appearance, construction, or handling of physical materials, such as their dimension, quantity, color, style, and technique of creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
			 */
			physDesc: Type.Optional(PhysDescSchema),

			// rng:optional - physLoc
			/**
			 * Groups information about the current physical location of a bibliographic item, such as the repository in which it is located and its shelf mark(s), and its previous locations.
			 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
			 */
			physLoc: Type.Optional(PhysLocSchema),

			// rng:optional - history
			/**
			 * Provides a container for information about the history of a resource other than the circumstances of its creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: Type.Optional(HistorySchema),

			// rng:optional - notesStmt
			/**
			 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
			 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
			 */
			notesStmt: Type.Optional(NotesStmtSchema),

			// rng:optional - classification
			/**
			 * Groups information which describes the nature or topic of an entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
			 */
			classification: Type.Optional(ClassificationSchema),

			// rng:optional - componentList
			/**
			 * Container for intellectual or physical component parts of a bibliographic entity.
			 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
			 */
			componentList: Type.Optional(Type.Any()), // TODO: Avoid circular dependency with ComponentListSchema

			// rng:optional - relationList
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: Type.Optional(RelationListSchema),

			// rng:zeroOrMore - extMeta
			/**
			 * Provides a container element for non-MEI metadata formats.
			 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
			 */
			extMeta: Type.Optional(
				Type.Union([ExtMetaSchema, Type.Array(ExtMetaSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type Item = Static<typeof ItemSchema>;

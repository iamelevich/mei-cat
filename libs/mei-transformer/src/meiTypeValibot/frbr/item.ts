import * as v from "valibot";
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
export const ItemSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,

	// Content model according to MEI spec:
	// rng:zeroOrMore - model.headLike
	/**
	 * Contains any heading, for example, the title of a section of text, or the heading of a list.
	 * @see https://music-encoding.org/guidelines/v5/elements/head.html
	 */
	head: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// rng:zeroOrMore - model.identifierLike
	/**
	 * An alpha-numeric string that establishes the identity of the described material.
	 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
	 */
	identifier: v.optional(
		v.union([
			v.lazy(() => v.unknown()),
			v.array(v.lazy(() => v.unknown())),
		]),
	),

	// rng:optional - availability
	/**
	 * Groups elements that describe the availability of and access to a bibliographic item, including an MEI-encoded document.
	 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
	 */
	availability: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - physDesc
	/**
	 * Container for information about the appearance, construction, or handling of physical materials, such as their dimension, quantity, color, style, and technique of creation.
	 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
	 */
	physDesc: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - physLoc
	/**
	 * Groups information about the current physical location of a bibliographic item, such as the repository in which it is located and its shelf mark(s), and its previous locations.
	 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
	 */
	physLoc: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - history
	/**
	 * Provides a container for information about the history of a resource other than the circumstances of its creation.
	 * @see https://music-encoding.org/guidelines/v5/elements/history.html
	 */
	history: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - notesStmt
	/**
	 * Collects any notes providing information about a text additional to that recorded in other parts of the bibliographic description.
	 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
	 */
	notesStmt: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - classification
	/**
	 * Groups information which describes the nature or topic of an entity.
	 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
	 */
	classification: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - componentList
	/**
	 * Container for intellectual or physical component parts of a bibliographic entity.
	 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
	 */
	componentList: v.optional(v.lazy(() => v.unknown())),

	// rng:optional - relationList
	/**
	 * Gathers relation elements.
	 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
	 */
	relationList: v.optional(v.lazy(() => v.unknown())),

	// rng:zeroOrMore - extMeta
	/**
	 * Provides a container element for non-MEI metadata formats.
	 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
	 */
	extMeta: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),
});

export type ItemData = v.InferOutput<typeof ItemSchema>;

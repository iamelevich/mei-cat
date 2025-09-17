import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "./attr/bibl";
import { AttrCommonSchema } from "./attr/common";
import { AttrFacsimileSchema } from "./attr/facsimile";

/**
 * Groups information about the current physical location of a bibliographic item, such as the repository in which it is located and its shelf mark(s), and its previous locations.
 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
 */
export const PhysLocSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrFacsimileSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))])),

			// rng:zeroOrMore - group of model.repositoryLike and model.identifierLike
			/**
			 * Institution, agency, or individual which holds a bibliographic item.
			 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
			 */
			repository: Type.Optional(
				Type.Union([Type.Ref("repository"), Type.Array(Type.Ref("repository"))]),
			),

			/**
			 * An alpha-numeric string that establishes the identity of the described material.
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: Type.Optional(
				Type.Union([Type.Ref("identifier"), Type.Array(Type.Ref("identifier"))]),
			),

			// rng:optional - history
			/**
			 * Provides a container for information about the history of a resource other than the circumstances of its creation.
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: Type.Optional(Type.Ref("history")),
		},
		{ additionalProperties: false },
	),
]);

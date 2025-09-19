import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { HistorySchema } from "../../header/element/history";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { ModelHeadLikeSchema } from "../model/headLike";
import { ModelIdentifierLikeSchema } from "../model/identifierLike";
import { ModelRepositoryLikeSchema } from "../model/repositoryLike";

/**
 * Base schema with attribute, to simplify types for PhysLocSchema
 */
const PhysLocBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Groups information about the current physical location of a bibliographic item, such as the repository in which it is located and its shelf mark(s), and its previous locations.
 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
 */
export const PhysLocSchema = v.lazy(() =>
	v.intersect([
		PhysLocBaseSchema,
		v.object({
			/**
			 * Reference to element history
			 * @see https://music-encoding.org/guidelines/v5/elements/history.html
			 */
			history: v.optional(HistorySchema),
		}),
		ModelHeadLikeSchema,
		ModelIdentifierLikeSchema,
		ModelRepositoryLikeSchema,
	]),
);

export type PhysLocData = v.InferOutput<typeof PhysLocSchema>;

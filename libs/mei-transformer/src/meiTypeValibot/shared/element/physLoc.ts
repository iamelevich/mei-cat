import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRepositoryLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { HistorySchema } from "../../header";

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
export const PhysLocSchema = v.intersect([
	PhysLocBaseSchema,
	v.object({
		/**
		 * Reference to element history
		 * @see https://music-encoding.org/guidelines/v5/elements/history.html
		 */
		history: v.optional(v.lazy(() => HistorySchema)),
	}),
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRepositoryLikeSchema,
]);

export type PhysLocData = v.InferOutput<typeof PhysLocSchema>;

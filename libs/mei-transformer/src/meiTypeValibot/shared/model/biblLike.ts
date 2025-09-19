import * as v from "valibot";
import {
	type BiblData,
	BiblSchema,
	type BiblStructData,
	BiblStructSchema,
} from "..";

/**
 * Groups elements containing a bibliographic description.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.biblLike.html
 */
export const ModelBiblLikeSchema: v.GenericSchema<ModelBiblLikeData> = v.object(
	{
		/**
		 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
		 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
		 */
		bibl: v.optional(
			v.union([v.lazy(() => BiblSchema), v.array(v.lazy(() => BiblSchema))]),
		),
		/**
		 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
		 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
		 */
		biblStruct: v.optional(
			v.union([
				v.lazy(() => BiblStructSchema),
				v.array(v.lazy(() => BiblStructSchema)),
			]),
		),
	},
);

export type ModelBiblLikeData = {
	bibl?: BiblData | BiblData[];
	biblStruct?: BiblStructData | BiblStructData[];
};

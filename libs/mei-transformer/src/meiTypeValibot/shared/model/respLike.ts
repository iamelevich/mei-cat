import * as v from "valibot";
import { type RespStmtData, RespStmtSchema } from "../element/respStmt";
import {
	type ModelRespLikePartData,
	ModelRespLikePartSchema,
} from "../model/respLikePart";

/**
 * Groups elements that are used to indicate intellectual or other significant responsibility, for example within a bibliographic citation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.respLike.html
 */
export const ModelRespLikeSchema: v.GenericSchema<ModelRespLikeData> = v.lazy(
	() =>
		v.intersect([
			v.object({
				/**
				 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes, responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
				 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
				 */
				respStmt: v.optional(
					v.union([RespStmtSchema, v.array(RespStmtSchema)]),
				),
			}),
			ModelRespLikePartSchema,
		]),
);

export type ModelRespLikeData = {
	respStmt?: RespStmtData | RespStmtData[];
} & ModelRespLikePartData;

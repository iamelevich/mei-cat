import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDatableSchema } from "../shared/attr/datable";
import { DateSchema } from "../shared/date";
import { RespStmtSchema } from "../shared/respStmt";
import { ChangeDescSchema } from "./changeDesc";

/**
 * Individual change within the revision description.
 * @see https://music-encoding.org/guidelines/v5/elements/change.html
 */
export const ChangeSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDatableSchema,
	Type.Object(
		{
			/**
			 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes,
			 * responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: Type.Optional(RespStmtSchema),
			/**
			 * Description of a revision of the MEI file.
			 * @see https://music-encoding.org/guidelines/v5/elements/changeDesc.html
			 */
			changeDesc: ChangeDescSchema,
			/**
			 * A string identifying a point in time or the time period between two such points.
			 * @see https://music-encoding.org/guidelines/v5/elements/date.html
			 */
			date: Type.Optional(DateSchema),
		},
		{ additionalProperties: false },
	),
]);

export type Change = Static<typeof ChangeSchema>;

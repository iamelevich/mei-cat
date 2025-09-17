import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrLangSchema } from "./attr/lang";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes,
 * responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
 */
export const RespStmtSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);

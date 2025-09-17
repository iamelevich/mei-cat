import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for respStmt element.
 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
 */
export const RespStmtSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type RespStmtData = v.InferOutput<typeof RespStmtSchema>;

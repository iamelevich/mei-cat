import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/bloc.html
 */
export const BlocSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type BlocData = v.InferOutput<typeof BlocSchema>;

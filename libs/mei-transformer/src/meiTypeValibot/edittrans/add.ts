import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrEditSchema } from "./attr/edit";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTransSchema } from "./attr/trans";

/**
 * Marks an addition to the text.
 * @see https://music-encoding.org/guidelines/v5/elements/add.html
 */
export const AddSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTransSchema.entries,
});

export type AddData = v.InferOutput<typeof AddSchema>;
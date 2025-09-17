import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Contains one or more alternative encodings for the same point in a text.
 * @see https://music-encoding.org/guidelines/v5/elements/app.html
 */
export const AppSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

export type AppData = v.InferOutput<typeof AppSchema>;

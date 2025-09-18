import * as v from "valibot";
import { AttrSlurAnlSchema } from "../analytical/attr/slur.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrSlurGesSchema } from "../gestural/attr/slur.ges";
import { AttrCommonSchema } from "../shared";
import { AttrSlurVisSchema } from "../visual/attr/slur.vis";
import { AttrSlurLogSchema } from "./attr/slur.log";

/**
 * Indication of 1) a "unified melodic idea" or 2) performance technique.
 * @see https://music-encoding.org/guidelines/v5/elements/slur.html
 */
export const SlurSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSlurLogSchema.entries,
	...AttrSlurVisSchema.entries,
	...AttrSlurGesSchema.entries,
	...AttrSlurAnlSchema.entries,
});

export type SlurData = v.InferOutput<typeof SlurSchema>;

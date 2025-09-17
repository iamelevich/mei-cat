import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDatableSchema } from "../shared/attr/datable";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrFilingSchema } from "../shared/attr/filing";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Identifies an organization or group of people that acts as a single entity.
 * @see https://music-encoding.org/guidelines/v5/elements/corpName.html
 */
export const CorpNameSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrBiblSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFilingSchema.entries,
});

export type CorpNameData = v.InferOutput<typeof CorpNameSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCanonicalSchema } from "../shared/attr/canonical";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDatableSchema } from "../shared/attr/datable";
import { AttrEvidenceSchema } from "../shared/attr/evidence";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrFilingSchema } from "../shared/attr/filing";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Designation for an individual, including any or all of that individual's forenames, surnames, honorific titles, and added names.
 * @see https://music-encoding.org/guidelines/v5/elements/persName.html
 */
export const PersNameSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrBiblSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrCanonicalSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFilingSchema.entries,
});

export type PersNameData = v.InferOutput<typeof PersNameSchema>;

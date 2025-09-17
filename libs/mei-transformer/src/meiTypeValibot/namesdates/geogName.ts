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
 * The proper noun designation for a place, natural feature, or political jurisdiction.
 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
 */
export const GeogNameSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrBiblSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFilingSchema.entries,
});

export type GeogNameData = v.InferOutput<typeof GeogNameSchema>;

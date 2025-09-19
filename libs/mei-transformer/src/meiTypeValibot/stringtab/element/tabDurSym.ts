import * as v from "valibot";
import { AttrTabDurSymAnlSchema } from "../../analytical/attr/tabDurSym.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrTabDurSymGesSchema } from "../../gestural/attr/tabDurSym.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrTabDurSymVisSchema } from "../../visual/attr/tabDurSym.vis";
import { AttrStringtabSchema } from "../attr/stringtab";
import { AttrTabDurSymLogSchema } from "../attr/tabDurSym.log";

/**
 * Base schema with attribute, to simplify types for TabDurSymSchema
 */
const TabDurSymBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrStringtabSchema.entries,
	...AttrTabDurSymAnlSchema.entries,
	...AttrTabDurSymGesSchema.entries,
	...AttrTabDurSymLogSchema.entries,
	...AttrTabDurSymVisSchema.entries,
});

/**
 * A visual indication of the duration of a <gi scheme="MEI">tabGrp</gi>.
 * @see https://music-encoding.org/guidelines/v5/elements/tabDurSym.html
 */
export const TabDurSymSchema = v.lazy(() => v.intersect([TabDurSymBaseSchema]));

export type TabDurSymData = v.InferOutput<typeof TabDurSymSchema>;

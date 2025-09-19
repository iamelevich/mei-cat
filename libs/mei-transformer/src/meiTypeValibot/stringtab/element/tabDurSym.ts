import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrStringtabSchema, AttrTabDurSymLogSchema } from "..";
import { AttrTabDurSymAnlSchema } from "../../analytical";
import { AttrTabDurSymGesSchema } from "../../gestural";
import { AttrTabDurSymVisSchema } from "../../visual";

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
export const TabDurSymSchema = v.intersect([TabDurSymBaseSchema]);

export type TabDurSymData = v.InferOutput<typeof TabDurSymSchema>;

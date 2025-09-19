import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans/attr/edit";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import {
	type ModelTextPhraseLikeLimitedData,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared/model/textPhraseLike.limited";
import { AttrPerfResSchema } from "../attr/perfRes";

/**
 * Base schema with attribute, to simplify types for PerfResSchema
 */
const PerfResBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrLangSchema.entries,
	...AttrPerfResSchema.entries,
});

type PerfResBaseData = v.InferOutput<typeof PerfResBaseSchema>;

/**
 * Name of an instrument on which a performer plays, a performer's voice range, or a standard performing ensemble designation.
 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
 */
export const PerfResSchema: v.GenericSchema<PerfResData> = v.lazy(() =>
	v.intersect([
		PerfResBaseSchema,
		v.object({
			/**
			 * Reference to element perfRes
			 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
			 */
			perfRes: v.optional(v.union([v.array(PerfResSchema), PerfResSchema])),
		}),
		ModelTextPhraseLikeLimitedSchema,
	]),
);

export type PerfResData = PerfResBaseData & {
	perfRes?: PerfResData | PerfResData[];
} & ModelTextPhraseLikeLimitedData;

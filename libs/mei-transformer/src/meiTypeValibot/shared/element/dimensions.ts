import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrEvidenceSchema } from "../attr/evidence";
import { AttrLangSchema } from "../attr/lang";
import { AttrMeasurementSchema } from "../attr/measurement";
import { MacroStrucUnstrucContentSchema } from "../macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for DimensionsSchema
 */
const DimensionsBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrLangSchema.entries,
	...AttrMeasurementSchema.entries,
});

/**
 * Information about the physical size of an entity; usually includes numerical data.
 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
 */
export const DimensionsSchema = v.lazy(() =>
	v.intersect([DimensionsBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type DimensionsData = v.InferOutput<typeof DimensionsSchema>;

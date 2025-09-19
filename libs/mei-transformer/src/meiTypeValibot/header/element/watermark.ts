import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for WatermarkSchema
 */
const WatermarkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a description of a watermark or similar device.
 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
 */
export const WatermarkSchema = v.lazy(() =>
	v.intersect([WatermarkBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type WatermarkData = v.InferOutput<typeof WatermarkSchema>;

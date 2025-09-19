import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrXySchema } from "../attr/xy";
import { ModelParacontentPartSchema } from "../model/paracontentPart";

/**
 * Base schema with attribute, to simplify types for PSchema
 */
const PBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrXySchema.entries,
});

/**
 * One or more text phrases that form a logical prose passage.
 * @see https://music-encoding.org/guidelines/v5/elements/p.html
 */
export const PSchema = v.lazy(() =>
	v.intersect([PBaseSchema, ModelParacontentPartSchema]),
);

export type PData = v.InferOutput<typeof PSchema>;

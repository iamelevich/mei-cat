import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { ModelParacontentPartSchema } from "../../shared/model/paracontentPart";

/**
 * Base schema with attribute, to simplify types for ImprimaturSchema
 */
const ImprimaturBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains a formal statement authorizing the publication of a work, sometimes required to appear on a title page or its verso.
 * @see https://music-encoding.org/guidelines/v5/elements/imprimatur.html
 */
export const ImprimaturSchema = v.lazy(() =>
	v.intersect([ImprimaturBaseSchema, ModelParacontentPartSchema]),
);

export type ImprimaturData = v.InferOutput<typeof ImprimaturSchema>;

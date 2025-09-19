import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for PublisherSchema
 */
const PublisherBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Name of the organization responsible for the publication of a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/publisher.html
 */
export const PublisherSchema = v.lazy(() =>
	v.intersect([PublisherBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type PublisherData = v.InferOutput<typeof PublisherSchema>;

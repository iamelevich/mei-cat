import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for SponsorSchema
 */
const SponsorBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
 */
export const SponsorSchema = v.intersect([
	SponsorBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type SponsorData = v.InferOutput<typeof SponsorSchema>;

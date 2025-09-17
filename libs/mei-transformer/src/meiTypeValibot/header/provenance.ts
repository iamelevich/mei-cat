import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for provenance element.
 * @see https://music-encoding.org/guidelines/v5/elements/provenance.html
 */
export const ProvenanceSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ProvenanceData = v.InferOutput<typeof ProvenanceSchema>;

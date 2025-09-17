import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for domainsDecl element.
 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html
 */
export const DomainsDeclSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type DomainsDeclData = v.InferOutput<typeof DomainsDeclSchema>;

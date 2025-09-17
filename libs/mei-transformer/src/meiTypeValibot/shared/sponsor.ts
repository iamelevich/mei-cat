import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for sponsor element.
 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
 */
export const SponsorSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SponsorData = v.InferOutput<typeof SponsorSchema>;

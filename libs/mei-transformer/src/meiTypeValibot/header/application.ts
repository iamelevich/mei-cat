import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for application element.
 * @see https://music-encoding.org/guidelines/v5/elements/application.html
 */
export const ApplicationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ApplicationData = v.InferOutput<typeof ApplicationSchema>;

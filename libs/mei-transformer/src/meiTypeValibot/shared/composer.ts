import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for composer element.
 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
 */
export const ComposerSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ComposerData = v.InferOutput<typeof ComposerSchema>;

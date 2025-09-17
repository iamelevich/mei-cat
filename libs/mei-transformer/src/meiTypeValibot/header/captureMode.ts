import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for captureMode element.
 * @see https://music-encoding.org/guidelines/v5/elements/captureMode.html
 */
export const CaptureModeSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CaptureModeData = v.InferOutput<typeof CaptureModeSchema>;

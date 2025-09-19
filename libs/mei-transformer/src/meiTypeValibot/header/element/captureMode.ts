import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for CaptureModeSchema
 */
const CaptureModeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The means used to record notation, sound, or images in the production of a source/manifestation (<abbr>e.g.</abbr>, analogue, acoustic, electric, digital, optical etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/captureMode.html
 */
export const CaptureModeSchema = v.intersect([
	CaptureModeBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type CaptureModeData = v.InferOutput<typeof CaptureModeSchema>;

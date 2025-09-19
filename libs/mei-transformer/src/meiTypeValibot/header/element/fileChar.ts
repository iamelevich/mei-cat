import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for FileCharSchema
 */
const FileCharBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Standards or schemes used to encode the file (<abbr>e.g.</abbr>, ASCII, SGML, etc.), physical characteristics of the file (<abbr>e.g.</abbr>, recording density, parity, blocking, etc.), and other characteristics that have a bearing on how the file can be processed.
 * @see https://music-encoding.org/guidelines/v5/elements/fileChar.html
 */
export const FileCharSchema = v.intersect([
	FileCharBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type FileCharData = v.InferOutput<typeof FileCharSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for ScriptNoteSchema
 */
const ScriptNoteBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes a particular script distinguished within the description of an autographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/scriptNote.html
 */
export const ScriptNoteSchema = v.lazy(() =>
	v.intersect([ScriptNoteBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type ScriptNoteData = v.InferOutput<typeof ScriptNoteSchema>;

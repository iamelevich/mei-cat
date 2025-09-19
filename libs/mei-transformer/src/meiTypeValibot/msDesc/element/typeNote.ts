import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for TypeNoteSchema
 */
const TypeNoteBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes a particular font or other significant typographic feature of a printed resource.
 * @see https://music-encoding.org/guidelines/v5/elements/typeNote.html
 */
export const TypeNoteSchema = v.lazy(() =>
	v.intersect([TypeNoteBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type TypeNoteData = v.InferOutput<typeof TypeNoteSchema>;

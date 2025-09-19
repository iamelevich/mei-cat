import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDatableSchema } from "../../shared/attr/datable";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for StampSchema
 */
const StampBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
 */
export const StampSchema = v.lazy(() =>
	v.intersect([StampBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type StampData = v.InferOutput<typeof StampSchema>;

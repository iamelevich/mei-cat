import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for ContextSchema
 */
const ContextBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The historical, social, intellectual, artistic, or other context within which the work was originally conceived (<abbr>e.g.</abbr>, the 17th century restoration of the monarchy in England, the aesthetic movement of the late 19th century, etc.) or the historical, social, intellectual, artistic, or other context within which the expression was realized.
 * @see https://music-encoding.org/guidelines/v5/elements/context.html
 */
export const ContextSchema = v.lazy(() =>
	v.intersect([ContextBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type ContextData = v.InferOutput<typeof ContextSchema>;

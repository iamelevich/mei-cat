import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMensurLogSchema } from "../../shared/attr/mensur.log";
import { AttrMensurVisSchema } from "../../visual/attr/mensur.vis";

/**
 * Base schema with attribute, to simplify types for MensurationSchema
 */
const MensurationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrMensurLogSchema.entries,
	...AttrMensurVisSchema.entries,
});

/**
 * Captures information about mensuration within bibliographic descriptions.
 * @see https://music-encoding.org/guidelines/v5/elements/mensuration.html
 */
export const MensurationSchema = v.lazy(() =>
	v.intersect([MensurationBaseSchema]),
);

export type MensurationData = v.InferOutput<typeof MensurationSchema>;

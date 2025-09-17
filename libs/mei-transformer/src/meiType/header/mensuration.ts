import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrMensurLogSchema } from "../shared/attr/mensurLog";
import { AttrMensurVisSchema } from "../shared/attr/mensurVis";

/**
 * Captures information about mensuration within bibliographic descriptions.
 * @see https://music-encoding.org/guidelines/v5/elements/mensuration.html
 */
export const MensurationSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrLangSchema,
	AttrMensurLogSchema,
	AttrMensurVisSchema,
]);

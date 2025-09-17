import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrMeterSigLogSchema } from "../shared/attr/meterSigLog";

/**
 * Captures information about the time signature within bibliographic descriptions.
 * @see https://music-encoding.org/guidelines/v5/elements/meter.html
 */
export const MeterSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrLangSchema,
	AttrMeterSigLogSchema,
]);

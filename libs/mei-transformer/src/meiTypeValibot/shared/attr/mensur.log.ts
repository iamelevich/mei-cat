import * as v from "valibot";

/**
 * Attributes for mensuration logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.log.html
 */
export const AttrMensurLogSchema = v.object({
  // TODO: Add mensuration logging attributes
});

export type AttrMensurLogData = v.InferOutput<typeof AttrMensurLogSchema>;

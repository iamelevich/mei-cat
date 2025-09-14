import { type Static, Type } from "@sinclair/typebox";

/**
 * Logical attributes for mensuration.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.log.html
 */
export const AttrMensurLogSchema = Type.Object(
	{
		/**
		 * Level of duration at which the proportion given by the @num and @numbase ratio applies.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.log.html#level
		 */
		"@level": Type.Optional(Type.String()),
		/**
		 * Along with numbase, describes duration as a ratio. num is the first value in the ratio, while numbase is the second.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.log.html#num
		 */
		"@num": Type.Optional(Type.Number()),
		/**
		 * Along with num, describes duration as a ratio. num is the first value in the ratio, while numbase is the second.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.log.html#numbase
		 */
		"@numbase": Type.Optional(Type.Number()),
	},
	{ additionalProperties: false },
);

export type AttrMensurLog = Static<typeof AttrMensurLogSchema>;

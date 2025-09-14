import { type Static, Type } from "@sinclair/typebox";

export const AttrInternetMediaSchema = Type.Object(
	{
		/**
		 * Specifies the applicable MIME (multimedia internet mail extension) type.
		 * The value should be a valid MIME media type defined by the Internet Engineering Task Force in RFC 2046.
		 * Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.internetMedia.html
		 */
		"@mimetype": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrInternetMedia = Static<typeof AttrInternetMediaSchema>;

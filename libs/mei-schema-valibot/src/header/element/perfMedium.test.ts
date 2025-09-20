import { describe, expect, it } from "bun:test";
import * as v from "valibot";
import { PerfMediumSchema } from "./perfMedium";

describe("PerfMediumSchema", () => {
	it("should be defined", () => {
		expect(PerfMediumSchema).toBeDefined();
	});

	it("should be a valid schema for cnw0002", () => {
		const parseResult = v.parse(PerfMediumSchema, {
			castList: {
				castItem: [
					{
						perfRes: {
							"#text": "B.",
							"@codedval": "vf",
							"@xml:id": "perfRes_8f758484",
						},
						role: {
							name: [
								{
									"#text": "Jeronimus",
									"@xml:id": "name_N250FE",
									"@xml:lang": "da",
								},
								{
									"#text": "Jeronimus",
									"@xml:id": "name_N25101",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_b2f37191",
						},
						"@xml:id": "castItem_d1e2130920830",
					},
					{
						perfRes: {
							"#text": "Mezz.S.",
							"@codedval": "vb",
							"@xml:id": "perfRes_5f1894fc",
						},
						role: {
							name: [
								{
									"#text": "Magdalone",
									"@xml:id": "name_N25112",
									"@xml:lang": "da",
								},
								{
									"#text": "Magdalone",
									"@xml:id": "name_N25115",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_ead314d8",
						},
						"@xml:id": "castItem_d1e2132220843",
					},
					{
						perfRes: {
							"#text": "T.",
							"@codedval": "vd",
							"@xml:id": "perfRes_44f87645",
						},
						role: {
							name: [
								{
									"#text": "Leander",
									"@xml:id": "name_N25126",
									"@xml:lang": "da",
								},
								{
									"#text": "Leander",
									"@xml:id": "name_N25129",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_94a8c41e",
						},
						"@xml:id": "castItem_d1e2133520856",
					},
					{
						perfRes: {
							"#text": "B.Bar.",
							"@xml:id": "perfRes_37e038ab",
						},
						role: {
							name: [
								{
									"#text": "Henrik",
									"@xml:id": "name_N25139",
									"@xml:lang": "da",
								},
								{
									"#text": "Henrik",
									"@xml:id": "name_N2513C",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_8d1acfd4",
						},
						"@xml:id": "castItem_d1e2134820869",
					},
					{
						perfRes: {
							"#text": "T.",
							"@codedval": "vd",
							"@xml:id": "perfRes_8ab4a6d0",
						},
						role: {
							name: [
								{
									"#text": "Arv",
									"@xml:id": "name_N2514D",
									"@xml:lang": "da",
								},
								{
									"#text": "Arv",
									"@xml:id": "name_N25150",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_24455a40",
						},
						"@xml:id": "castItem_d1e2136120882",
					},
					{
						perfRes: {
							"#text": "T.Bar.",
							"@xml:id": "perfRes_c04cc6f9",
						},
						role: {
							name: [
								{
									"#text": "Leonard",
									"@xml:id": "name_N25160",
									"@xml:lang": "da",
								},
								{
									"#text": "Leonard",
									"@xml:id": "name_N25163",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_d85fbc03",
						},
						"@xml:id": "castItem_d1e2137520895",
					},
					{
						perfRes: {
							"#text": "S.",
							"@codedval": "va",
							"@xml:id": "perfRes_ad3d4e56",
						},
						role: {
							name: [
								{
									"#text": "Leonora",
									"@xml:id": "name_N25174",
									"@xml:lang": "da",
								},
								{
									"#text": "Leonora",
									"@xml:id": "name_N25177",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_ccc4a994",
						},
						"@xml:id": "castItem_d1e2138820908",
					},
					{
						perfRes: {
							"#text": "S.",
							"@codedval": "va",
							"@xml:id": "perfRes_e7739ae0",
						},
						role: {
							name: [
								{
									"#text": "Pernille",
									"@xml:id": "name_N25188",
									"@xml:lang": "da",
								},
								{
									"#text": "Pernille",
									"@xml:id": "name_N2518B",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_b6e11989",
						},
						"@xml:id": "castItem_d1e2140120921",
					},
					{
						perfRes: {
							"#text": "B.",
							"@codedval": "vf",
							"@xml:id": "perfRes_74afbbcc",
						},
						role: {
							name: [
								{
									"#text": "En Vægter",
									"@xml:id": "name_N2519C",
									"@xml:lang": "da",
								},
								{
									"#text": "A Watchman",
									"@xml:id": "name_N2519F",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_d26e96c0",
						},
						"@xml:id": "castItem_d1e2141420934",
					},
					{
						perfRes: {
							"#text": "Bar.",
							"@codedval": "ve",
							"@xml:id": "perfRes_2fcc0442",
						},
						role: {
							name: [
								{
									"#text": "En Vagtmester",
									"@xml:id": "name_N251B0",
									"@xml:lang": "da",
								},
								{
									"#text": "A Doorman",
									"@xml:id": "name_N251B3",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_d0a6e3d9",
						},
						"@xml:id": "castItem_d1e2142720947",
					},
					{
						perfRes: {
							"#text": "Bar.",
							"@codedval": "ve",
							"@xml:id": "perfRes_2b20b6ed",
						},
						role: {
							name: [
								{
									"#text": "En Mand, der sælger Masker",
									"@xml:id": "name_N251C4",
									"@xml:lang": "da",
								},
								{
									"#text": "A Mask-Seller",
									"@xml:id": "name_N251C7",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_709673a5",
						},
						"@xml:id": "castItem_d1e2144020960",
					},
					{
						perfRes: {
							"#text": "Bar.",
							"@codedval": "ve",
							"@xml:id": "perfRes_f6f6a104",
						},
						role: {
							name: [
								{
									"#text": "En Magister",
									"@xml:id": "name_N251D8",
									"@xml:lang": "da",
								},
								{
									"#text": "A Tutor",
									"@xml:id": "name_N251DB",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_a8547515",
						},
						"@xml:id": "castItem_d1e2145420973",
					},
					{
						perfRes: {
							"#text": "S.",
							"@codedval": "va",
							"@xml:id": "perfRes_706e36fc",
						},
						role: {
							name: [
								{
									"#text": "En Dreng, der sælger Blomster",
									"@xml:id": "name_N251EC",
									"@xml:lang": "da",
								},
								{
									"#text": "A Flower-Boy",
									"@xml:id": "name_N251EF",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_80f7fa6a",
						},
						"@xml:id": "castItem_d1e2146720986",
					},
					{
						perfRes: {
							"#text": "B.Bar.",
							"@xml:id": "perfRes_f2220f43",
						},
						role: {
							name: [
								{
									"#text": "Maskarademesteren",
									"@xml:id": "name_N251FF",
									"@xml:lang": "da",
								},
								{
									"#text": "Master of the Masquerades",
									"@xml:id": "name_N25202",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_8849db94",
						},
						"@xml:id": "castItem_d1e2148020999",
					},
					{
						perfRes: {
							"#text": "T.",
							"@codedval": "vd",
							"@xml:id": "perfRes_2c7fb850",
						},
						role: {
							name: [
								{
									"#text": "En Student",
									"@xml:id": "name_N25213",
									"@xml:lang": "da",
								},
								{
									"#text": "A Student",
									"@xml:id": "name_N25216",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_7ba6a37f",
						},
						"@xml:id": "castItem_d1e2149321012",
					},
					{
						perfRes: {
							"#text": "T.",
							"@codedval": "vd",
							"@xml:id": "perfRes_b5497087",
						},
						role: {
							name: [
								{
									"#text": "1. Student",
									"@xml:id": "name_N25227",
									"@xml:lang": "da",
								},
								{
									"#text": "First Student",
									"@xml:id": "name_N2522A",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_ce17351e",
						},
						"@xml:id": "castItem_d1e2150621025",
					},
					{
						perfRes: {
							"#text": "T.",
							"@codedval": "vd",
							"@xml:id": "perfRes_47e0c0be",
						},
						role: {
							name: [
								{
									"#text": "2. Student",
									"@xml:id": "name_N2523B",
									"@xml:lang": "da",
								},
								{
									"#text": "Second Student",
									"@xml:id": "name_N2523E",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_f1f7725a",
						},
						"@xml:id": "castItem_d1e2151921038",
					},
					{
						perfRes: {
							"#text": "T.",
							"@codedval": "vd",
							"@xml:id": "perfRes_bc4413ca",
						},
						role: {
							name: [
								{
									"#text": "3. Student",
									"@xml:id": "name_N2524F",
									"@xml:lang": "da",
								},
								{
									"#text": "Third Student",
									"@xml:id": "name_N25252",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_e24c44b7",
						},
						"@xml:id": "castItem_d1e2153321051",
					},
					{
						perfRes: {
							"#text": "T.",
							"@codedval": "vd",
							"@xml:id": "perfRes_f4c57ef4",
						},
						role: {
							name: [
								{
									"#text": "4. Student",
									"@xml:id": "name_N25263",
									"@xml:lang": "da",
								},
								{
									"#text": "Fourth Student",
									"@xml:id": "name_N25266",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_b051693b",
						},
						"@xml:id": "castItem_d1e2154621064",
					},
					{
						perfRes: {
							"#text": "T.",
							"@codedval": "vd",
							"@xml:id": "perfRes_52e792d2",
						},
						role: {
							name: [
								{
									"#text": "5. Student",
									"@xml:id": "name_N25277",
									"@xml:lang": "da",
								},
								{
									"#text": "Fifth Student",
									"@xml:id": "name_N2527A",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_29f09abb",
						},
						"@xml:id": "castItem_d1e2155921077",
					},
					{
						perfRes: {
							"#text": "S.",
							"@codedval": "va",
							"@xml:id": "perfRes_1869d48e",
						},
						role: {
							name: [
								{
									"#text": "1. Pige",
									"@xml:id": "name_N2528B",
									"@xml:lang": "da",
								},
								{
									"#text": "First Girl",
									"@xml:id": "name_N2528E",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_9b71ad8c",
						},
						"@xml:id": "castItem_d1e2157221090",
					},
					{
						perfRes: {
							"#text": "S.",
							"@codedval": "va",
							"@xml:id": "perfRes_d4bf6a1f",
						},
						role: {
							name: [
								{
									"#text": "2. Pige",
									"@xml:id": "name_N2529F",
									"@xml:lang": "da",
								},
								{
									"#text": "Second Girl",
									"@xml:id": "name_N252A2",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_54170960",
						},
						"@xml:id": "castItem_d1e2158521103",
					},
					{
						perfRes: {
							"#text": "S.",
							"@codedval": "va",
							"@xml:id": "perfRes_592c8d16",
						},
						role: {
							name: [
								{
									"#text": "3. Pige",
									"@xml:id": "name_N252B3",
									"@xml:lang": "da",
								},
								{
									"#text": "Third Girl",
									"@xml:id": "name_N252B6",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_510c597b",
						},
						"@xml:id": "castItem_d1e2159821116",
					},
					{
						perfRes: {
							"#text": "B.",
							"@codedval": "vf",
							"@xml:id": "perfRes_7da5432a",
						},
						role: {
							name: [
								{
									"#text": "En Officer",
									"@xml:id": "name_N252C7",
									"@xml:lang": "da",
								},
								{
									"#text": "An Officer",
									"@xml:id": "name_N252CA",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_d67754bb",
						},
						"@xml:id": "castItem_d1e2161221129",
					},
					{
						role: {
							name: [
								{
									"#text": "Dansemesteren",
									"@xml:id": "name_N252D7",
									"@xml:lang": "da",
								},
								{
									"#text": "The Dancing Master",
									"@xml:id": "name_N252DA",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_e66a5bc5",
						},
						"@xml:id": "castItem_d1e2162521142",
					},
					{
						role: {
							name: [
								{
									"#text": "Hans Kæreste",
									"@xml:id": "name_N252E7",
									"@xml:lang": "da",
								},
								{
									"#text": "His Fiancée",
									"@xml:id": "name_N252EA",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_d6ff233d",
						},
						"@xml:id": "castItem_d1e2163821155",
					},
					{
						role: {
							name: [
								{
									"#text": "Vulcan",
									"@xml:id": "name_N252F7",
									"@xml:lang": "da",
								},
								{
									"#text": "Vulcan",
									"@xml:id": "name_N252FA",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_5ba9cf3c",
						},
						"@xml:id": "castItem_d1e2165121168",
					},
					{
						role: {
							name: [
								{
									"#text":
										"Kor af Studenter, Officerer, unge Piger, maskerede Personer af begge Køn",
									"@xml:id": "name_N25307",
									"@xml:lang": "da",
								},
								{
									"#text":
										"Choir of Students, Officers, Young Girls, Masked Persons of both Sexes",
									"@xml:id": "name_N2530A",
									"@xml:lang": "en",
								},
							],
							"@xml:id": "role_53acfbb5",
						},
						"@xml:id": "castItem_e2a1d555",
					},
				],
				"@xml:id": "castList_N250F5",
			},
			perfResList: {
				perfResList: [
					{
						head: {
							"@xml:id": "head_N25317",
						},
						perfRes: [
							{
								"#text": "fl.",
								"@codedval": "wa",
								"@count": "2",
								"@solo": "false",
								"@xml:id": "perfRes_aef3b68b",
							},
							{
								"#text": "fl. / fl.picc.",
								"@codedval": "wa",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_7c6dae8a",
							},
							{
								"#text": "ob.",
								"@codedval": "wb",
								"@count": "2",
								"@solo": "false",
								"@xml:id": "perfRes_0c904403",
							},
							{
								"#text": "cor.ingl.",
								"@codedval": "ba",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_c0b0b7db",
							},
							{
								"#text": "cl.",
								"@codedval": "wc",
								"@count": "2",
								"@solo": "false",
								"@xml:id": "perfRes_5460e5e1",
							},
							{
								"#text": "cl.b.",
								"@codedval": "wc",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_6bc46929",
							},
							{
								"#text": "fg.",
								"@codedval": "wd",
								"@count": "2",
								"@solo": "false",
								"@xml:id": "perfRes_509ba85c",
							},
							{
								"#text": "cor.",
								"@codedval": "ba",
								"@count": "4",
								"@solo": "false",
								"@xml:id": "perfRes_a4fa3501",
							},
							{
								"#text": "tr.",
								"@codedval": "bb",
								"@count": "3",
								"@solo": "false",
								"@xml:id": "perfRes_d3e6a379",
							},
							{
								"#text": "trb.t.",
								"@codedval": "bd",
								"@count": "2",
								"@solo": "false",
								"@xml:id": "perfRes_195795d1",
							},
							{
								"#text": "trb.b.",
								"@codedval": "bd",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_f97e44ea",
							},
							{
								"#text": "tb.",
								"@codedval": "be",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_4264c729",
							},
							{
								"#text": "timp.",
								"@codedval": "pa",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_b6d3de50",
							},
							{
								"#text": "trgl.",
								"@codedval": "pz",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_79f26ae2",
							},
							{
								"#text": "tamb.picc.",
								"@codedval": "pd",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_c1d069f1",
							},
							{
								"#text": "gr.c.",
								"@codedval": "pd",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_1e996ed5",
							},
							{
								"#text": "ptti.",
								"@codedval": "pz",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_fa58afa4",
							},
							{
								"#text": "cast.",
								"@codedval": "pz",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_a3e4c38f",
							},
							{
								"#text": "tam.",
								"@codedval": "pz",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_5a00e1ca",
							},
							{
								"#text": "glsp.",
								"@codedval": "pz",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_21675879",
							},
							{
								"#text": "camp.",
								"@codedval": "pz",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_6acbd223",
							},
							{
								"#text": "vl.1",
								"@codedval": "sa",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_2694dbf5",
							},
							{
								"#text": "vl.2",
								"@codedval": "sa",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_139d7717",
							},
							{
								"#text": "va.",
								"@codedval": "sb",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_2f90d6e9",
							},
							{
								"#text": "vc.",
								"@codedval": "sc",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_72bd0c43",
							},
							{
								"#text": "cb.",
								"@codedval": "sd",
								"@count": "1",
								"@solo": "false",
								"@xml:id": "perfRes_7066953e",
							},
						],
						"@codedval": "on",
						"@xml:id": "perfResList_2f1f9fe9",
					},
					{
						head: {
							"#text": "Choir",
							"@xml:id": "head_N253B7",
						},
						"@codedval": "ca",
						"@xml:id": "perfResList_d55a6c31",
					},
				],
				"@xml:id": "perfResList_N25313",
			},
			"@analog": "marc:048",
			"@xml:id": "perfMedium_0636cc76",
		});

		expect(parseResult).toMatchSnapshot();
	});
});

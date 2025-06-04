import { describe, expect, it } from "bun:test";
import { getMeiXmlVersion } from "./meiToJSON";

describe("meiToJSON", () => {
	it("should get MEI XML version", () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
			<mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="5.1">
				<fileDesc>
					<titleStmt>
						<title>Test</title>
					</titleStmt>
				</fileDesc>
			</mei>`;
		const version = getMeiXmlVersion(xml);
		expect(version).toBe("5.1");
	});

	it("should get MEI XML version 5.1+anyStart", () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
			<mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="5.1+anyStart"></mei>`;
		const version = getMeiXmlVersion(xml);
		expect(version).toBe("5.1+anyStart");
	});

	it("should get MEI XML version from 2.1.1", () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
			<mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="2.1.1"></mei>`;
		const version = getMeiXmlVersion(xml);
		expect(version).toBe("2.1.1");
	});

	it("should get MEI XML version from 3.0.0", () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
			<mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="3.0.0"></mei>`;
		const version = getMeiXmlVersion(xml);
		expect(version).toBe("3.0.0");
	});

	it("should get MEI XML version from 4.0.0", () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
			<mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="4.0.0"></mei>`;
		const version = getMeiXmlVersion(xml);
		expect(version).toBe("4.0.0");
	});
});

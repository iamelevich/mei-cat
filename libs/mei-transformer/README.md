# @mei-cat/mei-transformer

- [@mei-cat/mei-transformer](#mei-catmei-transformer)
  - [Install](#install)
  - [Usage](#usage)
  - [Directory Structure](#directory-structure)
    - [Key Directories](#key-directories)

## Install

To install dependencies:

```bash
bun install
```

## Usage

```ts
import { meiXmlToJson } from "@mei-cat/mei-transformer";

const xml = `...`;
const json = meiXmlToJson(xml); // Will be validated against the MEI schema. Throws an error if the XML is not valid.
```

## Directory Structure

```
@mei-cat/mei-transformer/
├── src/                                    # Main source code
│   ├── meiToJSON.ts                       # Core MEI to JSON transformation logic
│   ├── meiTypeValibot/                    # MEI schema definitions using Valibot
│   ├── utils/                            # Utility functions
│   │   └── typebox.ts                    # TypeBox utilities
│   └── __testFiles__/                    # Test data files
├── scripts/                               # Build and generation scripts. Mostly used for development.
│   ├── components/                       # MEI component definitions (JSON). Created by the generate-json-def.ts script.
│   │   ├── analytical/                   # Analytical components
│   │   ├── cmn/                          # CMN components
│   │   ├── header/                       # Header components
│   │   └── ...                           # Other MEI modules
│   ├── generate-json-def.ts              # Generate JSON definitions
│   ├── generate-valibot.ts               # Generate Valibot schemas
│   └── manage-modules.ts                 # Module management utilities
├── files/                                 # Test and sample files
│   ├── input/                            # Input MEI files for testing
│   │   ├── cnw0002.xml
│   │   └── cnw0010.xml
│   ├── result/                           # Generated output files. Created by the transform script.
│   └── transform.ts                      # Transformation script
├── encoding-tools/                        # MEI encoding tools. Git submodule.
├── sample-encodings/                      # Sample MEI files by version. Git submodule.
├── index.ts                              # Main library entry point
├── package.json                          # Package configuration
└── tsconfig.json                         # TypeScript configuration
```

### Key Directories

- **`src/meiTypeValibot/`**: Contains TypeScript type definitions for all MEI elements, organized by MEI modules. Each module contains:
  - `attr/`: Attribute definitions
  - `element/`: Element definitions
  - `model/`: Content model definitions
  - `index.ts`: Module exports

- **`scripts/components/`**: JSON definitions of MEI components used to generate the TypeScript types. Created by the generate-json-def.ts script.

- **`encoding-tools/`**: XSLT transformation tools for converting between different music notation formats and MEI versions

- **`sample-encodings/`**: Test files organized by MEI version for validation and testing

- **`files/`**: Input/output files for testing transformations


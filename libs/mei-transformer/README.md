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

- **`encoding-tools/`**: XSLT transformation tools for converting between different music notation formats and MEI versions

- **`sample-encodings/`**: Test files organized by MEI version for validation and testing

- **`files/`**: Input/output files for testing transformations


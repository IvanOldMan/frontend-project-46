
# Training project on JS "Generator difference"

The utility compares two files and generates differences.

To use the utility, you must specify the relative paths to the files you want to compare:

```bash
  $ gendiff filePath/file1.json filePath/file2.json 
```
Supported file extensions:
- *.json
- *.yaml
- *.yml

The output of the difference generator can be in the following forms:
Supported file extensions:
- [stylish](#stylish) (default)
- [plain](#plain)
- [json](#json)

## Installation

To install the package, run the following commands:

```bash
  git clone https://github.com/IvanOldMan/frontend-project-46.git
```
```bash
  make install
```
```bash
  sudo npm link
```

## Running Tests

To run tests, run the following command:

```bash
  make test
```
## Demo
### stylish

```bash
  $ gendiff --format stylish filePath/file1.json filePath/file2.json
```
```bash
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```
[![asciicast](https://asciinema.org/a/zOTBPGJvxmwrMWyD1qfAmuh6I.svg)](https://asciinema.org/a/zOTBPGJvxmwrMWyD1qfAmuh6I)

### plain

```bash
  $ gendiff --format plain filePath/file1.json filePath/file2.json
```
```bash
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```
[![asciicast](https://asciinema.org/a/DVUCPe6EM8EDlvYwoNyVUjcCb.svg)](https://asciinema.org/a/DVUCPe6EM8EDlvYwoNyVUjcCb)

### json

```bash
  $ gendiff --format json filePath/file1.json filePath/file2.json
```
```bash
[{"key":"common","children":[{"key":"follow","value":false,"status":"added"},{"key":"setting1","value":"Value 1","status":"unchanged"},{"key":"setting2","value":200,"status":"deleted"},{"key":"setting3","oldValue":true,"newValue":null,"status":"changed"},{"key":"setting4","value":"blah blah","status":"added"},{"key":"setting5","value":{"key5":"value5"},"status":"added"},{"key":"setting6","children":[{"key":"doge","children":[{"key":"wow","oldValue":"","newValue":"so much","status":"changed"}],"status":"parent"},{"key":"key","value":"value","status":"unchanged"},{"key":"ops","value":"vops","status":"added"}],"status":"parent"}],"status":"parent"},{"key":"group1","children":[{"key":"baz","oldValue":"bas","newValue":"bars","status":"changed"},{"key":"foo","value":"bar","status":"unchanged"},{"key":"nest","oldValue":{"key":"value"},"newValue":"str","status":"changed"}],"status":"parent"},{"key":"group2","value":{"abc":12345,"deep":{"id":45}},"status":"deleted"},{"key":"group3","value":{"deep":{"id":{"number":45}},"fee":100500},"status":"added"}]
```
[![asciicast](https://asciinema.org/a/PxdKSl7WYycnXIp5qnplcRhhz.svg)](https://asciinema.org/a/PxdKSl7WYycnXIp5qnplcRhhz)


## Badges

[![Actions Status](https://github.com/IvanOldMan/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/IvanOldMan/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/2b7f203458153382425e/maintainability)](https://codeclimate.com/github/IvanOldMan/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/2b7f203458153382425e/test_coverage)](https://codeclimate.com/github/IvanOldMan/frontend-project-46/test_coverage)
# Testing

To run tests:

```shell
yarn test
```

## Skippable tests

Some tests will be skipped if ressources are not provided, like test archives for `Archive` and `Standardizer` classes tests for example.

To provide this ressources, environment variable are used.

### Environnement variable list

| Name | Value description |
| ---- | --- |
| LOCAL_ARCHIVE_DIR | Path to a directory with archives |

### Exemples

#### Linux

```shell
LOCAL_ARCHIVE_DIR=/path/to/your/archive/dir yarn test
```

#### Windows

*Install linux* :yum:

Seriously, I don't know ¯\_(ツ)_/¯

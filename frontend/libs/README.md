# Usage

Component folders with prefix ui-\* will be used as a single package modules for development, you can create new modules:

```bash
1. yarn nx g library ui-*
2. pushd libs/ui-* > /dev/null 2>&1
3. yarn init
4. popd > /dev/null 2>&1
```

The project is currently based on essential modules as:

- core
- common
- config
- environment
- shared

All other modules will be resolved as `lazy-loaded` for application development.

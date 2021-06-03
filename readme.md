# vite, docker, and @arcgis

Trying to make a docker image with vitejs and an @arcgis dependency

1. Allow the build script to execute

   `chmod +x ./scripts/docker-build.sh`

1. Run the build script

   `./scripts/docker-build.sh`

```
> [build 7/7] RUN npm run build:
#15 0.486
#15 0.486 > build
#15 0.486 > vite build
#15 0.486
#15 0.812 vite v2.3.6 building for production...
#15 0.860 transforming...
#15 17.84 ✓ 1788 modules transformed.
#15 26.12 rendering chunks...
#15 47.85 Killed
------
executor failed running [/bin/sh -c npm run build]: exit code: 137
```

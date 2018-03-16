#!/usr/bin/bash
cd build/
electron-packager ../ autolyze-ed --platform=darwin
cd autolyze-ed-darwin-x64
zip -r ../autolyze-ed-darwin-x64.zip autolyze-ed.app
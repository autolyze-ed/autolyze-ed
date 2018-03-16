#!/usr/bin/bash
cd build/
electron-packager ../ autolyze-ed --platform=win32 --arch=ia32
zip -r autolyze-ed-win32-ia32.zip autolyze-ed-win32-ia32
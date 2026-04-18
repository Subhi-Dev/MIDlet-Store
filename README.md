# MIDlet Store

A multi-platform MIDlet Store implementation targeting various mobile device generations.

## Project Structure

- /wap-app - WAP 1.x content with WML for very old mobile devices
- /xhtml-app - WAP 2.0 content with XHTML-MP for feature phones
- /modern-app - Modern implementation with SVG animations and enhanced UI
- /shared - Shared resources across platforms

## Running the Application

Choose the appropriate version based on target device:

- For old WAP 1.x devices: wap-app/index.wml
- For WAP 2.0 / feature phones: xhtml-app/index.xhtml
- For modern smartphones/browsers: modern-app/index.html

## Development

- The catalog data is shared across all versions in shared/data/catalog.js
- Each version has platform-specific UI implementations
- SVG animations are available only in the modern version

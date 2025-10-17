# Wordpress Centigrade to Fahrenheit Temperature Conversion Block Plugin
- Make a directory to hold plugin in ```wp-content/plugins```
- Be carefull with naming as maybe an issue with hyphenated plugin names(?)
- To create block (substitute ```<block-name>``` ). DO NOT run this command twice or you will re-initialize and lose your work.
```bash
npx @wordpress/create-block@latest <block-name> --variant dynamic --target-dir .
```
- In ```.gitginore``` add ```/build``` as only ```/src``` files sould be tracked.
- Remember to run ```npm start``` during development to build any changes in ```/src``` to ```/build```.
- DO NOT edit files in build folder only those in source folder.
- Note the use of ```.scss``` style files in source folder these are compiled to ```.css``` for use in the build folder.
# Curr-Ver

Write current version details in the format of a json object to stdout.

## Description

This executable is a no-nonsense way to output current npm version and git hash details, for consumption by other scripts. This is also handy for generating version details to be consumed by a web frontend.

Writes to stdout, and is unopinionated about what to do with the version information.

Note: This assumes you desire to leverage both npm and git version details.

## Usage

Run manually from the command line with:

```bash
npx curr-ver
```

Write those details to a file like:

```bash
npx curr-ver > ./.version.json
```

Install as a utility in your project:

```bash
npm install --save-dev curr-ver
```

Run as a commit hook with a utility like [Husky](https://www.github.com/typicode/husky). In your package.json:

```json
  "husky": {
    "hooks": {
      "post-commit": "curr-ver > ./.version.json",
      "post-checkout": "curr-ver > ./.version.json"
    }
  }
```

Below are available cmd line args.

Output sample:

```json
{"version":"1.0.1","hash":"6fb8b2d7"}
```

Arg | default | description
--|--|--
--suffix | _none_ | Adds a suffix to the version, such as 'dev' in `1.0.0-dev`
--git-dir | _none_ | If operating at a different location than the project root (alongside ./.git). Useful if receiving the error `fatal: Not a git repository: '.git'`

## Roadmap

Things to do (ideas)

 - Add branch information
 - (maybe) add file output option
 - Add other suggested options
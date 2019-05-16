# Cur-Ver

Write current version details to a json file.

## Description

This executable is a no-nonsense way to output current npm version and git hash details, for consumption by other scripts. This is also handy for generating version details to be consumed by a web frontend.

Writes to stdout.

## Usage

Run manually from the command line with:

```bash
npx run cur-ver > ./.version.json
```

Install as a utility in your project:

```bash
npm install --save-dev cur-ver
```

Run as a commit hook with a utility like [Husky](https://www.github.com/typicode/husky). In your package.json:

```json
  "husky": {
    "hooks": {
      "post-commit": "cur-ver > ./.version.json",
      "post-checkout": "cur-ver > ./.version.json"
    }
  }
```

Below are available cmd line args.

Arg | default | description
--|--|--
--suffix | _none_ | Adds a suffix to the version, such as 'dev' in `1.0.0-dev`
--git-dir | _none_ | If operating at a different location than the project root (alongside ./.git). Useful if receiving the error `fatal: Not a git repository: '.git'`
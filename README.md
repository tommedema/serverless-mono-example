# Serverless Mono Repo Typescript References example

Example repo on how to use yarn workspaces together with the serverless framework. Utilizes [Typescript references](https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/#project-references).

## Stack

- Typescript (with references)
- Lerna
- Yarn Workspaces
- Serverless Framework

## Features

- Typescript: all code is written in Typescript
- Async lambda: the lamda exposes an async function to be run in node 8.10 on AWS
- Pkg deploy: command to deploy a serverless service in a package
- Package test without compilation: test packages using ts-node without having to compile
- Mono repo packaging: mono repo packages can be depended upon by serverless services, and should be packaged in the serverless artifact prior to being uploaded to AWS
- Root build: compile all package in an intelligent order based on a dependency graph from the mono repo root
- Root test without compilation: test all packages from the root folder
- Root deploy: one command to deploy all serverless services in the mono repo root based on dependency graph
- External typeroots: allows you to define types for external packages to be used throughout the mono-repo
- Lint in-editor (with tslint extension for visual studio code)
- Prettier + lint root command
- Prettier + lint on commit

### Adding a repo

Simply create a new folder in `packages` and run `yarn init`. Prefix serverless services with the `sls-` prefix, such that their dependencies will not be hoisted (the serverless framework doesn't support hoisted packages at the moment). Ensure that the package has a local `tsconfig.json`. When your Typescript package depends on another typescript package within the mono repo, reference to it using the package's `tsconfig.json`.

### Adding types for external packages

If your external packages does not have types available from the DefinitelyTypes project (e.g. `@types/my-package`), you can easily define custom typings in the special `packages/types` package.

### Running tests

To run tests in all packages, run `yarn test` from the root folder.

To run tests in a specific package, run `yarn test` from the package's folder.

### Building

To build all packages based on their dependency graph order, run `yarn build` from the root folder

To build a specific package including the packages it references to, run `yarn build` from the package folder.

### Deploying

To deploy a serverless service, run `yarn deploy --stage=dev --aws-profile=profile-name` from the package folder. This will build the Typescript packages used by that serverless service.

To deploy all serverless services, run the same command from the root folder.

## Open issues (PRs welcome)

- Editor type safety: "on the fly" type safety without compilation does not yet work across the mono repo, see this [vscode issue](https://github.com/Microsoft/vscode/issues/57242). Note that it seems to [partially](https://github.com/tommedema/serverless-mono-example/issues/4#issuecomment-416328781) work in WebStorm.
- Serverless artifacts contain a few [redundant dependencies](https://github.com/serverless/serverless/pull/3889#issuecomment-414547166), presumably due to a bug in Serverless Framework's [exclude dev dependencies logic](https://github.com/serverless/serverless/blob/643c4fdd7e9c7bfd7a81c4be81a23cffd4be3113/lib/plugins/package/lib/zipService.js#L145). There is an initiative to create the [artifact manually](https://github.com/tommedema/serverless-mono-example/commit/e0f97a081f35b181d55a2523cb583168e685698d) using `yarn install --production`, but this is a slow process and is therefore not yet integrated into the master branch.
- Yarn workspace hoisting is currently disabled for [serverless services](https://forum.serverless.com/t/using-serverless-with-yarn-workspaces/4560)

## References

- https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/#project-references
- https://github.com/Soul-Master/typescript3-composite-project
- https://stackoverflow.com/questions/51939395/how-to-use-typescripts-references-and-build-mode-to-compile-a-mono-repo-to-a-se

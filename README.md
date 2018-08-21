# Serverless Mono Repo example

Example repo on how to use yarn workspaces together with the serverless framework.

## Requirements

- OK Typescript: all code is written in Typescript
- OK Async lambda: the lamda exposes an async function to be run in node 8.10 on AWS
- OK Pkg deploy: command to deploy a serverless service in a package
- OK Package test without compilation: test packages using ts-node without having to compile
- OK Editor type safety: type safety works across the mono repo without having to compile
- OK Mono repo packaging: mono repo packages can be depended upon by serverless services, and should be packaged in the serverless artifact prior to being uploaded to AWS
- External typeroots: allows you to define types for external packages to be used throughout the mono-repo
- Root build: compile all package in an intelligent order based on a dependency graph from the mono repo root
- Root test without compilation: test all packages from the root folder
- Root deploy: one command to deploy all serverless services in the mono repo root based on dependency graph
- Commit prettier + tslint: prettify and tslint code prior to commiting
- In-editor tslint

## ToDo

- ~~init yarn workspaces root~~
- ~~init `random` library that fetches a random number async~~
- ~~init ts-node random test that tests random library~~
- ~~confirm that in-editor type safety works~~
- ~~build lambda typescript~~
- ~~create deploy script~~
- ~~implement pkg deploy in lambda~~
- ~~make lambda depend on @org/random~~
- ~~have serverless artifact include mono dependencies~~
- ~~serverless unit test~~
- external typeroots
- root build
- root test
- root deploy
- commit prettier + tslint
- in-editor tslint

## Issues taken for granted

- Serverless artifacts contain a few [redundant dependencies](https://github.com/serverless/serverless/pull/3889#issuecomment-414547166)
- Yarn workspace hoisting is currently disabled for [serverless services](https://forum.serverless.com/t/using-serverless-with-yarn-workspaces/4560)

## References

- https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/#project-references
- https://github.com/Soul-Master/typescript3-composite-project
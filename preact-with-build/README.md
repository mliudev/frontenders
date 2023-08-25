# preact prototype

Tutorial app for setting up a preact development environment.

## requirements

- deno

## development

Create `node_modules` folder for dependencies:

```bash
rm -rf node_modules/
deno cache --node-modules-dir --reload src/index.ts
```

```bash
./run-dev.sh
```

Navigate to <http://localhost:8000/index.html>.

In separate terminal windows run the linter and formatter:

```bash
./tsc.sh
```

```bash
./format.sh
```

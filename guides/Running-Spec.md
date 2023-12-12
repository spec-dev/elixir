# Running Spec

Add Elixir's Live Tables to your own Postgres schema and run them locally.

## Prerequisites

⚒️ [Get set up with Spec](./guides/Spec-Setup.md)

## Start Spec

▶️ 🍿 [All about running Spec](https://www.loom.com/share/1c46f77578cb425bb6fc68981355b494)

The following command will:

1. Run Spec alongside a local Postgres database named `spec`
2. Add the Live Tables for this project ([outlined here](./.spec/project.toml)) to your Postgres schema
3. Kick off backfills for every Live Table on first startup

```bash
$ spec start
```
# Running Spec

Add Elixir's Live Tables to your own Postgres schema and run them locally.

## Prerequisites

⚒️ [Get set up with Spec](./Spec-Setup.md)

## Start Spec

▶️ 🍿 [All about running Spec](https://www.loom.com/share/1c46f77578cb425bb6fc68981355b494)

The following command will:

1. Run Spec alongside a local Postgres database named `spec`
2. Add the Live Tables for this project ([outlined here](./.spec/project.toml)) to your Postgres schema
3. Backfill every Live Table on first startup
4. Subscribe to events to keep your tables up-to-date with new activity on-chain
5. Subscribe to reorgs across all chains your tables depend on

```bash
$ spec start
```
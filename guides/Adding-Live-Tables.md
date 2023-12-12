# Adding Live Tables

▶️ 🍿 [All about adding Live Tables](https://www.loom.com/share/c8e7059602de4bcc8dd014a539045295?sid=c7c5e923-754c-49d5-a9af-9c5d2eae8001)

Now that your contracts have been synced into your namespace, you can easily access any of your events as Live Tables in Postgres.
This can be done either with the CLI or our desktop app. But since the desktop app is still under active development, here we'll focus on just the CLI commands.

## Prerequisites

⚒️ [Get set up with Spec](./Spec-Setup.md)

## Adding Live Tables via the CLI

The `spec add table` command is the simplest way to add Live Tables to Postgres from the CLI. 

The full command structure is:

```bash
$ spec add table <id>
```

...where the `<id>` is the id of an event or custom Live Table on Spec. Thankfully, every data source has its own dedicated page in the ecosystem to show exactly which command to run to add it as a Live Table.

Here are some examples:

### Example: Contract Event

```bash
$ spec add table elixir.VertexManager.PoolAdded
```
[Ecosystem Page](https://spec.dev/elixir/event/ad264cb6-ca7b-4317-bcd4-743bd3b2571f#table)

### Example: Handling multiple events with same name

When one of your contract groups has multiple events with the same name, you will also need to specify the unique *topic* of the event when adding it as a Live Table:

```bash
$ spec add table elixir.VertexManager.Deposit@0x5087c507ecc5d0c98a650e056183b51dc2354729f823139bbbdf3122f8f7bfa8
```
[Ecosystem Page](https://spec.dev/elixir/event/73235e11-8df4-4783-a8e1-f054c5226a36#table)

### Example: Custom Live Table

```bash
$ spec add table allov2.Profile
```
[Ecosystem Page](https://spec.dev/allov2/live-table/1e2a51e7-6cf6-4924-88c9-3536e38061a8#table)

### Example: Custom Table Name

```bash
$ spec add table elixir.VertexManager.Claim --name my_awesome_claims
```

## Result

When you add Live Tables to your project schema, they are codified in 2 different ways within your project's [`.spec/`](../.spec/) config directory. You'll notice this repo already has a spec project initialized with a few different Live Tables already added to it.

1. SQL Migrations — [`.spec/migrations/`](../.spec/migrations/) — Definitions for the underlying SQL tables
2. Live Table Config — [`.spec/project.toml`](../.spec/project.toml) — Exact data mappings and filters (if any) for the Live Tables in your schema

## Next

⏭️ [Writing custom, higher-level, Live Tables](./Writing-Live-Tables.md)<br>
⏭️ [Running your Live Tables locally](./Running-Spec.md)<br>
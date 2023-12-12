# Elixir x Spec

Contract Groups and Live Tables for the [Elixir Protocol](https://elixir.finance) on [Spec](https://spec.dev).

**The Elixir Namespace:** https://spec.dev/elixir  🚀

![elixir](https://github.com/spec-dev/elixir/assets/6496306/44418143-4a07-4437-b956-f1e096510624)

# Preview

▶️ 🍿 [Turn contract addresses to Live Postgres Tables in 2 minutes](https://www.loom.com/share/f8b9a64bfa3a4e61baede35b8fb6f51e?sid=a02b2a4e-ba63-4079-b17f-77d1ddaa159c)

# Workflow

The most common workflow on Spec involves:

1. [Syncing your contracts to Spec](./guides/Syncing-Contracts.md)
2. [Adding contract events as Live Tables](./guides/Adding-Live-Tables.md)
3. [Writing custom, higher-level, Live Tables](./guides/Writing-Live-Tables.md)
4. [Running your Live Tables locally](./guides/Running-Spec.md)

# Quickstart

This repository also contains a spec project ([`.spec/`](.spec/)) with a few Live Tables already added to its schema:

1. `deposit` — All deposit events from the Vertex Manager contract (both event versions)
2. `queued` — All queued events from the Vertex Manager contract (both event versions)
3. `claim_event` — All claim events from the Vertex Manager contract
4. `transaction` — All transactions *to or from* the Vertex Manager contract

To instantly get up and running with these 4 Live Tables, jump straight to the [running spec guide](./guides/Running-Spec.md).

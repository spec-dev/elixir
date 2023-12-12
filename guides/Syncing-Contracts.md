# Syncing Contracts to Spec

▶️ 🍿 [All about Contract Groups](https://www.loom.com/share/40944d7bdc1b4489825219b98cd8f508?sid=8a6353b8-feff-4055-acaa-21d08f732ff9)

Before tapping into live data from your contracts, you first need to sync them into your namespace on Spec.

Doing this is a simple 3-step process:

1. Outline your contract deployments within [`contracts.spec.json`](../contracts.spec.json).
2. Ensure each contract has an ABI with the same name inside the [`abis/`](../abis/) directory.
3. Sync your contracts via the CLI

## Prerequisites

⚒️ [Get set up with Spec](./Spec-Setup.md)

## Syncing Contracts

To sync your contracts to your namespace, run the following command *from the root folder of this repository:*

```bash
$ spec sync contracts
```

All of the events in your multi-chain deployments will then be:
1. Decoded
2. Enriched with transaction/block/chain-level data
3. Merged across chains by topic
4. Published to Spec and made available as Live Tables

Additionally, all of your contracts and their respective events will then be visible on your namespace's page in the ecosystem:
* https://spec.dev/elixir/contract-groups
* https://spec.dev/elixir/events

## Next

⏭️ [Adding contract events as Live Tables](./Adding-Live-Tables.md)<br>
⏭️ [Writing custom, higher-level, Live Tables](./Writing-Live-Tables.md)<br>
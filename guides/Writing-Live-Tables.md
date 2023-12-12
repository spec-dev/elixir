# Writing Custom Live Tables

Spec's indexing framework makes it possible to define your own Live Tables with completely custom indexing logic. This is great for curating higher-level data models that need to update in-place or need to further resolve data from a variety of locations (IPFS, other smart contracts, etc.). [More about this](https://spec.dev/blog/introducing-spec#subgraphs--farewell-).

## Deposit & Queued

This repository currently contains 2 custom Live Tables:

1. [`Deposit`](../Deposit/spec.ts)
2. [`Queued`](../Queued/spec.ts)

The goal of these Live Tables is simply to consolidate the multiple versions of Deposit/Queued events for the Vertex Manager contract. This way, you will be able to easily add Deposit and Queued events as individual Live Tables, rather than having this event data split up across event/ABI versions.

▶️ 🍿 [Video walkthrough of this process](https://www.loom.com/share/0bbed9791d5e4118b4c9689e5b24d4d3?sid=a1541ae7-e17b-4e80-aeb6-1d1977d1145f)

## Next

⏭️ [Running your Live Tables locally](./Running-Spec.md)<br>
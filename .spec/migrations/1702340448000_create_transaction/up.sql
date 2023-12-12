BEGIN;
    create table public.transaction (hash varchar, nonce int4, transaction_index int4, "from" varchar, "to" varchar, contract_address varchar, value varchar, input varchar, function_name varchar, function_args json, transaction_type int4, status int4, root varchar, gas varchar, gas_price varchar, max_fee_per_gas varchar, max_priority_fee_per_gas varchar, gas_used varchar, cumulative_gas_used varchar, effective_gas_price varchar, block_hash varchar, block_number int8, block_timestamp timestamptz, chain_id varchar);
    alter table public.transaction add constraint pk_1ehzaz1ybhqnha7n5cqcxs primary key (hash, chain_id);
    create index idx_cscg9hyqpiqgc4xgwg6gab on public.transaction (block_number, chain_id);
    create index idx_ufuf5wsnyp5qqksf75rvgj on public.transaction (block_timestamp);
COMMIT;
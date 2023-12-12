BEGIN;
    create table public.claim_event ("user" varchar, token varchar, amount varchar, contract_name varchar, contract_address varchar, transaction_hash varchar, log_index int4, block_hash varchar, block_number int8, block_timestamp timestamptz, chain_id varchar);
    alter table public.claim_event add constraint pk_on2z1plsmwq7vww16jtfyz primary key (transaction_hash, log_index, chain_id);
    create index idx_eqbpqfnqbrkax4f8rvcrfv on public.claim_event (block_number, chain_id);
    create index idx_dfdgqq7m2yugwnk15bc4gc on public.claim_event (block_timestamp);
COMMIT;
BEGIN;
    create table public.queued (spot json, queue_count int4, queue_up_to int4, contract_address varchar, transaction_hash varchar, log_index int4, block_hash varchar, block_number int8, block_timestamp timestamptz, chain_id varchar);
    alter table public.queued add constraint pk_stmvyk5vufzocqkdp4pb97 primary key (transaction_hash, log_index, chain_id);
    create index idx_iwcynmvwdn3xevc1kvf6wb on public.queued (block_number, chain_id);
    create index idx_1ztwmxe7evxq2kq9pyi2ix on public.queued (block_timestamp);
COMMIT;
BEGIN;
    create table public.deposit (router varchar, caller varchar, receiver varchar, id int4, token varchar, amount varchar, shares varchar, contract_address varchar, transaction_hash varchar, log_index int4, block_hash varchar, block_number int8, block_timestamp timestamptz, chain_id varchar);
    alter table public.deposit add constraint pk_3apgzec1s5xj9jba1bseqs primary key (transaction_hash, log_index, chain_id);
    create index idx_455hw7pjupkjj9xptrgede on public.deposit (block_number, chain_id);
    create index idx_8zsacxqv5qt8sfunxfeng7 on public.deposit (block_timestamp);
COMMIT;
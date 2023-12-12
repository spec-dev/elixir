import { 
    Spec, 
    LiveTable, 
    Property, 
    Event, 
    OnEvent, 
    Address, 
    TransactionHash,
    BigInt,
} from '@spec.dev/core'

const TOPIC_A = '0xaaefaf378e10f40556b2167ea878af7e62d89229b0bce3924630aabf1ee611ff'
const TOPIC_B = '0x5087c507ecc5d0c98a650e056183b51dc2354729f823139bbbdf3122f8f7bfa8'

/**
 * All deposit events from the Elixir vertex manager.
 */
@Spec({ 
    uniqueBy: ['transactionHash', 'logIndex', 'chainId'] 
})
class Deposit extends LiveTable {

    @Property()
    router: Address

    @Property()
    caller: Address

    @Property()
    receiver: Address

    @Property()
    id: number

    @Property()
    token: Address

    @Property()
    amount: BigInt

    @Property()
    shares: BigInt

    @Property()
    contractAddress: Address

    @Property()
    transactionHash: TransactionHash

    @Property()
    logIndex: number

    // ==== Event Handlers ==============
    
    @OnEvent('elixir.VertexManager.Deposit', { signature: TOPIC_A })
    @OnEvent('elixir.VertexManager.Deposit', { signature: TOPIC_B })
    onDeposit(event: Event) {
        this.router = event.data.router
        this.caller = event.data.caller
        this.receiver = event.data.receiver
        this.id = event.data.id
        this.token = event.data.token
        this.amount = BigInt.from(event.data.amount)
        this.shares = event.data.shares ? BigInt.from(event.data.shares) : null
        this.contractAddress = event.origin.contractAddress
        this.transactionHash = event.origin.transactionHash
        this.logIndex = event.origin.logIndex
    }
}

export default Deposit
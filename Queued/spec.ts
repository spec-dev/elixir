import { 
    Spec, 
    LiveTable, 
    Property, 
    Event, 
    OnEvent, 
    Address, 
    TransactionHash,
    Json,
} from '@spec.dev/core'

const TOPIC_A = '0x6cac7d92eae95cf704a479bb2a7f5370cdb30b2a2358825ec6ce58f6550a11fa'
const TOPIC_B = '0x5a595dfbcf52edc2be4703ae288841f3b01e1c4a8bf9a45b09914abd29b8d009'

/**
 * All queued events from the Elixir vertex manager.
 */
@Spec({ 
    uniqueBy: ['transactionHash', 'logIndex', 'chainId'] 
})
class Queued extends LiveTable {

    @Property()
    spot: Json

    @Property()
    queueCount: number

    @Property()
    queueUpTo: number

    @Property()
    contractAddress: Address

    @Property()
    transactionHash: TransactionHash

    @Property()
    logIndex: number

    // ==== Event Handlers ==============
    
    @OnEvent('elixir.VertexManager.Queued', { signature: TOPIC_A })
    @OnEvent('elixir.VertexManager.Queued', { signature: TOPIC_B })
    onDeposit(event: Event) {
        this.spot = event.data.spot
        this.queueCount = event.data.queueCount
        this.queueUpTo = event.data.queueUpTo
        this.contractAddress = event.origin.contractAddress
        this.transactionHash = event.origin.transactionHash
        this.logIndex = event.origin.logIndex
    }
}

export default Queued
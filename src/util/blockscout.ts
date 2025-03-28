import axios from "axios"

export const blockscoutEndpoints: any = {
  // celo: 'https://celo.blockscout.com',
  onus: 'https://explorer.onuschain.io',
  base: 'https://base.blockscout.com',
  // scroll: 'https://blockscout.scroll.io',
  canto: 'https://explorer.plexnode.wtf',
}

export async function getBlockscoutBlock(timestamp: number, chain: string) {

  const api = `${blockscoutEndpoints[chain]}/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before`
  const { data } = await axios(api)
  if (data.status !== '1')
    throw new Error('Issue fetching block from blockscout: '+ api)
  return {
    timestamp,
    block: +data.result.blockNumber,
    number: +data.result.blockNumber,
  }
}
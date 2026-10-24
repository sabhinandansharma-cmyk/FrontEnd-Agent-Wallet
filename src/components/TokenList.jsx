import { Radio } from 'lucide-react';
import { tokens } from '../data/mockData.js';
export function TokenList({ compact = false }) {
  return <div className={`token-list ${compact ? 'token-list-compact' : ''}`}>{tokens.map((token) => <div className="token-item" key={token.symbol}><div className={`token-coin coin-${token.tone}`}>{token.symbol === 'ETH' ? '◆' : token.symbol === 'USDC' ? '$' : 'D'}</div><div className="token-info"><strong>{token.symbol}<span> · {compact ? token.name : token.name.split(' ')[0]}</span></strong><small>{token.amount} {token.symbol}</small></div><div className="token-value"><strong>{token.value}</strong><small className={`feed-status ${token.freshness === 'Mock' ? 'feed-mock' : ''}`}><Radio size={10}/>{token.freshness}</small></div></div>)}</div>;
}

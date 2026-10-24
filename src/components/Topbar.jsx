import { Copy, Menu, Wallet } from 'lucide-react';
import { wallet } from '../data/mockData.js';

export function Topbar({ page, onMenu }) {
  return <header className="topbar"><button className="menu-button icon-button" onClick={onMenu} aria-label="Open navigation"><Menu size={19}/></button><div className="topbar-spacer"/><div className="topbar-chip network-chip"><span className="dot dot-blue"/>{wallet.network}</div><button className="topbar-chip address-chip" title="Copy wallet address" onClick={() => navigator.clipboard?.writeText(wallet.address.replace('...', ''))}><Wallet size={14}/><span>{wallet.address}</span><Copy size={12}/></button><div className="topbar-chip owner-chip"><div className="avatar">M</div><div><small>Owner · MetaMask</small><strong>{wallet.owner}</strong></div></div></header>;
}

import { Activity, Bell, ChartNoAxesColumn, ChevronRight, LayoutDashboard, KeyRound, SlidersHorizontal, Shield, ShieldAlert, X } from 'lucide-react';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard }, { label: 'Activity', icon: Activity },
  { label: 'Approvals', icon: Bell, badge: '1' }, { label: 'Policy', icon: SlidersHorizontal },
  { label: 'Sessions', icon: KeyRound }, { label: 'Attack Console', icon: ShieldAlert, badge: '4' },
];

export function Sidebar({ active, onNavigate, open }) {
  return <>
    {open && <button className="mobile-backdrop" onClick={() => onNavigate(active)} aria-label="Close navigation" />}
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand-row"><div className="brand-mark"><Shield size={19} strokeWidth={2.4} /></div><div><div className="brand-name">Al-Wallet</div><div className="brand-sub">ERC-4337 · ON-CHAIN POLICY</div></div><button className="sidebar-close icon-button" onClick={() => onNavigate(active)} aria-label="Close navigation"><X size={17}/></button></div>
      <div className="nav-caption">WORKSPACE</div>
      <nav className="nav-list" aria-label="Main navigation">
        {navItems.map(({ label, icon: Icon, badge }) => <button key={label} onClick={() => onNavigate(label)} className={`nav-item ${active === label ? 'active' : ''}`}><Icon size={16}/><span>{label}</span>{badge && <b className={`nav-badge ${label === 'Approvals' ? 'badge-amber' : ''}`}>{badge}</b>}</button>)}
      </nav>
      <div className="sidebar-bottom">
        <div className="network-card"><div className="network-title"><span className="dot dot-blue"/>Base Sepolia<span className="live-label"><span className="dot dot-green"/> LIVE</span></div><div className="network-line"><span>EntryPoint</span><span>v0.7</span></div><div className="network-line"><span>Bundler</span><span>Pimlico</span></div><div className="network-line"><span>Chain ID</span><span>84532</span></div></div>
        <div className="audit-badge"><Shield size={12}/> TESTNET ONLY <span>·</span> UNAUDITED</div>
        <button className="collapse-link" onClick={() => onNavigate('Overview')}>Open wallet details <ChevronRight size={13}/></button>
      </div>
    </aside>
  </>;
}

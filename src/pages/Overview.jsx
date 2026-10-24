import { useState } from 'react';
import { Activity as ActivityIcon, Bell, Clock3, Shield, ShieldAlert, Zap } from 'lucide-react';
import { wallet, activities } from '../data/mockData.js';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { TokenList } from '../components/TokenList.jsx';
import { MiniChart } from '../components/MiniChart.jsx';
import { ActivityTable } from '../components/ActivityTable.jsx';
import { ApprovalCard } from '../components/ApprovalCard.jsx';

function StatCard({ icon: Icon, label, value, caption, tone = 'blue' }) { return <div className="panel stat-card"><div className={`stat-icon tone-${tone}`}><Icon size={15}/></div><span>{label}</span><strong>{value}</strong><small>{caption}</small></div>; }
export function Overview() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Executed', 'Blocked', 'Pending'];
  const shown = filter === 'All' ? activities : activities.filter((a) => filter === 'Executed' ? a.status === 'Allowed' : a.status === filter);
  return <>
    <SectionHeading title="Overview" subtitle="Your agent can spend. It can't be tricked into draining you." />
    <section className="overview-top-grid">
      <div className="panel balance-card"><div className="panel-label-row"><span>Smart account balance</span><span className="eyebrow-pill pill-blue"><span/> ERC-4337</span></div><div className="balance-amount">{wallet.balance}<small>3 tokens · oracle-priced</small></div><MiniChart/><TokenList compact/></div>
      <div className="panel budget-card"><div className="panel-label-row"><span>Daily budget</span><span className="tiny-mono">USD · CHAINLINK</span></div><div className="budget-amount">$23.40 <span>/ $50.00</span></div><div className="progress-track"><span style={{ width: '47%' }}/></div><div className="budget-usage"><span>47% used</span><span>$26.60 left</span></div><div className="budget-details"><div><span>Per-tx limit</span><strong>$20.00</strong></div><div><span>Window resets in</span><strong>14h 22m</strong></div><div><span>Price feeds</span><strong className="text-green">● fresh</strong></div></div></div>
      <div className="panel attacks-card"><div className="stat-icon tone-green"><Shield size={15}/></div><span>Attacks blocked</span><strong>{wallet.attacksBlocked}</strong><span className="lost-pill">$0.00 LOST</span><p>Every rejection happened on-chain in validateUserOp — before a single wei moved.</p></div>
    </section>
    <section className="stats-grid"><StatCard icon={Zap} label="Agent UserOps · 24h" value="18" caption="via Pimlico bundler"/><StatCard icon={ShieldAlert} label="Rejected in validation" value="11" caption="bundler refused · $0 gas" tone="red"/><StatCard icon={Bell} label="Pending approvals" value="1" caption="expires in 58:12" tone="amber"/><StatCard icon={Clock3} label="Session expires in" value={wallet.sessionExpires} caption="agent 0x9b1C...44aE" tone="green"/></section>
    <section className="overview-bottom-grid"><div className="panel activity-panel"><div className="panel-heading"><div><h2><ActivityIcon size={16}/> Live activity</h2><p>Indexed from wallet events · updates every block</p></div><div className="filter-tabs">{filters.map((tab) => <button key={tab} onClick={() => setFilter(tab)} className={filter === tab ? 'selected' : ''}>{tab}</button>)}</div></div><ActivityTable items={shown} compact/></div><div className="overview-side"><ApprovalCard/><div className="panel session-panel"><div className="panel-heading"><div><h2><Clock3 size={16}/> Agent session</h2></div><span className="eyebrow-pill pill-green"><span/> ACTIVE</span></div><div className="agent-box"><span className="agent-avatar"><Zap size={14}/></span><div><strong>Local agent · Qwen2.5-7B</strong><small>0x9b1C...44aE · Ollama</small></div></div><div className="session-row"><span>Valid until</span><strong>20:14 · Oct 24</strong></div><div className="session-row"><span>Open pending</span><strong>1 / 5</strong></div><div className="session-buttons"><button className="button button-secondary">Pause wallet</button><button className="button button-danger-ghost">Revoke</button></div></div></div></section>
  </>;
}

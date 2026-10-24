import { useState } from 'react';
import { ArrowDownToLine, Search } from 'lucide-react';
import { activities } from '../data/mockData.js';
import { ActivityTable } from '../components/ActivityTable.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
export function Activity() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const filters = ['All', 'Allowed', 'Blocked', 'Pending'];
  const rows = activities.filter((item) => (filter === 'All' || item.status === filter) && `${item.title} ${item.detail} ${item.result}`.toLowerCase().includes(query.toLowerCase()));
  return <><SectionHeading title="Activity" subtitle="Every operation your smart account accepted, blocked, or queued." action={<button className="button button-secondary" onClick={() => window.print()}><ArrowDownToLine size={14}/> Export activity</button>}/><div className="panel page-panel"><div className="panel-heading page-panel-heading"><div><h2>Wallet events</h2><p>8 events · latest first</p></div><label className="search-box"><Search size={14}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search activity"/></label></div><div className="filter-tabs page-filter-tabs">{filters.map((tab) => <button key={tab} onClick={() => setFilter(tab)} className={filter === tab ? 'selected' : ''}>{tab}</button>)}</div><ActivityTable items={rows}/></div></>;
}

/**
 * API boundary for future backend integration.
 * Set VITE_API_BASE_URL in .env when the service is available. Until then,
 * callers get local mock responses so the UI remains usable offline.
 */
import { activities, attacks, targets, tokens, wallet } from '../data/mockData.js';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const MOCK_DELAY_MS = 120;

async function request(path, fallback) {
  if (!API_BASE_URL) {
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));
    return structuredClone(fallback);
  }
  const response = await fetch(`${API_BASE_URL}${path}`, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`API request failed (${response.status})`);
  return response.json();
}

export const walletApi = {
  getOverview: () => request('/wallet/overview', { wallet, tokens, activities }),
  getActivity: () => request('/wallet/activity', activities),
  getApprovals: () => request('/wallet/approvals', [{ id: 7, title: 'Concert ticket #A-112', merchant: 'TicketShop', selector: 'buyTicket()', amount: '$35.00', requestedBy: 'agent 0x9b1C...44aE', expiresIn: '58:12', status: 'pending' }]),
  getPolicy: () => request('/wallet/policy', { perTxLimit: 20, dailyLimit: 50, targets }),
  getSession: () => request('/wallet/sessions', [{ name: 'Local agent · Qwen2.5-7B', address: '0x9b1C...44aE', status: 'Active', expires: '20:14 · Oct 24', pending: '1 / 5' }]),
  getAttacks: () => request('/wallet/attacks', attacks),
};

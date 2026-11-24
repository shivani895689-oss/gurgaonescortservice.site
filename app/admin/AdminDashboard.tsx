'use client';

import { useMemo, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  Globe,
  KeyRound,
  Link2,
  ListChecks,
  Loader2,
  Lock,
  LogOut,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Trash2,
} from 'lucide-react';

type SubmitResult = {
  ok: boolean;
  message: string;
  submitted?: number;
  urls?: string[];
  invalid?: string[];
  results?: Array<{ ok: boolean; status: number; submitted: number; message: string; endpoint?: string }>;
};

type HistoryItem = {
  id: string;
  at: string;
  type: 'all' | 'selected' | 'custom';
  submitted: number;
  ok: boolean;
  message: string;
};

type Props = {
  initialAuthed: boolean;
  allUrls: string[];
  keyLocation: string;
  endpoint: string;
};

function nowLabel() {
  return new Date().toLocaleString();
}

export default function AdminDashboard({ initialAuthed, allUrls, keyLocation, endpoint }: Props) {
  const [authed, setAuthed] = useState(initialAuthed);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [customUrls, setCustomUrls] = useState('');
  const [submittingAll, setSubmittingAll] = useState(false);
  const [submittingSelected, setSubmittingSelected] = useState(false);
  const [submittingCustom, setSubmittingCustom] = useState(false);
  const [checkingKey, setCheckingKey] = useState(false);
  const [keyStatus, setKeyStatus] = useState<{ ok: boolean; message: string; status?: number } | null>(null);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [copied, setCopied] = useState(false);

  const filteredUrls = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allUrls;
    return allUrls.filter((u) => u.toLowerCase().includes(q));
  }, [allUrls, query]);

  const parsedCustomUrls = useMemo(() => {
    return customUrls
      .split(/[\n,]+/)
      .map((u) => u.trim())
      .filter(Boolean);
  }, [customUrls]);

  const allFilteredSelected = filteredUrls.length > 0 && filteredUrls.every((u) => selected.includes(u));

  function pushHistory(type: HistoryItem['type'], res: SubmitResult) {
    setHistory((prev) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        at: nowLabel(),
        type,
        submitted: res.submitted ?? 0,
        ok: !!res.ok,
        message: res.message,
      },
      ...prev,
    ].slice(0, 8));
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setLoginError(data.message || 'Invalid password.');
        return;
      }
      setPassword('');
      setAuthed(true);
    } catch {
      setLoginError('Login failed. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' }).catch(() => null);
    setAuthed(false);
    setResult(null);
    setSelected([]);
    setCustomUrls('');
    setKeyStatus(null);
  }

  async function postIndexNow(payload: Record<string, unknown>) {
    const res = await fetch('/api/admin/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    return data as SubmitResult;
  }

  async function submitAll() {
    const okConfirm = window.confirm(`Submit all ${allUrls.length} URLs to IndexNow?`);
    if (!okConfirm) return;
    setResult(null);
    setSubmittingAll(true);
    try {
      const data = await postIndexNow({ all: true });
      setResult(data);
      pushHistory('all', data);
    } catch (e) {
      const data = { ok: false, message: e instanceof Error ? e.message : 'Submission failed.' };
      setResult(data);
      pushHistory('all', data);
    } finally {
      setSubmittingAll(false);
    }
  }

  async function submitSelectedUrls() {
    setResult(null);
    if (selected.length === 0) {
      setResult({ ok: false, message: 'Select at least one URL.' });
      return;
    }
    setSubmittingSelected(true);
    try {
      const data = await postIndexNow({ urls: selected });
      setResult(data);
      pushHistory('selected', data);
    } catch (e) {
      const data = { ok: false, message: e instanceof Error ? e.message : 'Submission failed.' };
      setResult(data);
      pushHistory('selected', data);
    } finally {
      setSubmittingSelected(false);
    }
  }

  async function submitCustom(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    if (parsedCustomUrls.length === 0) {
      setResult({ ok: false, message: 'Enter at least one URL.' });
      return;
    }
    setSubmittingCustom(true);
    try {
      const data = await postIndexNow({ urls: parsedCustomUrls });
      setResult(data);
      pushHistory('custom', data);
    } catch (e) {
      const data = { ok: false, message: e instanceof Error ? e.message : 'Submission failed.' };
      setResult(data);
      pushHistory('custom', data);
    } finally {
      setSubmittingCustom(false);
    }
  }

  async function checkKey() {
    setCheckingKey(true);
    setKeyStatus(null);
    try {
      const res = await fetch('/api/admin/key-check', { cache: 'no-store' });
      const data = await res.json().catch(() => ({}));
      setKeyStatus({ ok: !!data.ok, message: data.message || 'Key check failed.', status: data.status });
    } catch (e) {
      setKeyStatus({ ok: false, message: e instanceof Error ? e.message : 'Key check failed.' });
    } finally {
      setCheckingKey(false);
    }
  }

  async function copyAllUrls() {
    try {
      await navigator.clipboard.writeText(allUrls.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  function toggleUrl(url: string) {
    setSelected((prev) => prev.includes(url) ? prev.filter((u) => u !== url) : [...prev, url]);
  }

  function toggleFiltered() {
    setSelected((prev) => {
      if (allFilteredSelected) return prev.filter((u) => !filteredUrls.includes(u));
      const set = new Set(prev);
      filteredUrls.forEach((u) => set.add(u));
      return Array.from(set);
    });
  }

  if (!authed) {
    return (
      <main className="min-h-screen bg-[#fdf8f5] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
          <div className="w-14 h-14 rounded-2xl bg-[#2f3338]/10 text-[#2f3338] flex items-center justify-center mb-5">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#4a4d52]">Admin Login</h1>
          <p className="text-gray-500 mt-2 text-sm">Enter the admin password to access the IndexNow submission panel.</p>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none focus:border-[#2f3338] focus:ring-2 focus:ring-[#2f3338]/20"
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </label>
            {loginError && (
              <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f3338] text-white font-semibold px-5 py-3 hover:bg-[#25282d] transition disabled:opacity-60"
            >
              {loginLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
              {loginLoading ? 'Signing in...' : 'Login'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdf8f5] px-4 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338]">Admin Panel</p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#4a4d52] mt-2">IndexNow Submission Center</h1>
            <p className="text-gray-500 mt-2 max-w-2xl">Submit all website URLs, selected URLs, or custom URLs to IndexNow for faster indexing.</p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 self-start"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={<Globe className="w-5 h-5" />} label="Total Site URLs" value={String(allUrls.length)} />
          <StatCard icon={<ListChecks className="w-5 h-5" />} label="Selected URLs" value={String(selected.length)} />
          <StatCard icon={<Link2 className="w-5 h-5" />} label="Custom URLs" value={String(parsedCustomUrls.length)} />
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center gap-3 text-[#2f3338] mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-500">Key Status</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={checkKey}
                disabled={checkingKey}
                className="inline-flex items-center gap-2 rounded-lg bg-[#2f3338]/10 text-[#2f3338] px-3 py-2 text-sm font-medium hover:bg-[#2f3338]/15 disabled:opacity-60"
              >
                {checkingKey ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                {checkingKey ? 'Checking...' : 'Check Key File'}
              </button>
            </div>
            {keyStatus && (
              <p className={`mt-2 text-xs ${keyStatus.ok ? 'text-green-600' : 'text-red-600'}`}>{keyStatus.message}</p>
            )}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#4a4d52]">All Website URLs</h2>
                <p className="text-sm text-gray-500">Search, select, and submit specific URLs - or submit everything.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={copyAllUrls} className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <Copy className="w-4 h-4" /> {copied ? 'Copied' : 'Copy All'}
                </button>
                <button onClick={submitAll} disabled={submittingAll} className="inline-flex items-center gap-2 rounded-xl bg-[#2f3338] text-white px-4 py-2 text-sm font-semibold hover:bg-[#25282d] disabled:opacity-60">
                  {submittingAll ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {submittingAll ? 'Submitting All...' : 'Submit All URLs'}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search URLs..."
                  className="w-full rounded-xl border border-gray-200 pl-9 pr-4 py-2.5 text-sm outline-none focus:border-[#2f3338] focus:ring-2 focus:ring-[#2f3338]/20"
                />
              </div>
              <button onClick={toggleFiltered} className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                {allFilteredSelected ? 'Unselect Filtered' : 'Select Filtered'}
              </button>
              <button onClick={() => setSelected([])} className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                Clear Selection
              </button>
            </div>

            <div className="max-h-[420px] overflow-auto rounded-2xl border border-gray-100">
              {filteredUrls.map((url) => {
                const checked = selected.includes(url);
                return (
                  <label key={url} className={`flex items-start gap-3 px-4 py-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-[#fdf8f5] ${checked ? 'bg-[#2f3338]/5' : 'bg-white'}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleUrl(url)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#2f3338] focus:ring-[#2f3338]"
                    />
                    <span className="text-sm text-gray-700 break-all">{url}</span>
                  </label>
                );
              })}
              {filteredUrls.length === 0 && <div className="px-4 py-8 text-sm text-gray-500 text-center">No URLs match your search.</div>}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">{selected.length} URL(s) selected</p>
              <button
                onClick={submitSelectedUrls}
                disabled={submittingSelected}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4a4d52] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#3f4247] disabled:opacity-60"
              >
                {submittingSelected ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {submittingSelected ? 'Submitting Selected...' : 'Submit Selected URLs'}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#2f3338]/10 text-[#2f3338] flex items-center justify-center">
                  <Link2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#4a4d52]">Custom URL Submit</h2>
                  <p className="text-sm text-gray-500">Paste one or more URLs, or relative paths.</p>
                </div>
              </div>
              <form onSubmit={submitCustom} className="space-y-4">
                <textarea
                  value={customUrls}
                  onChange={(e) => setCustomUrls(e.target.value)}
                  rows={8}
                  placeholder={'https://gurgaonescortservice.site/\n/about\n/contact'}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#2f3338] focus:ring-2 focus:ring-[#2f3338]/20"
                />
                <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
                  <span>{parsedCustomUrls.length} URL(s) detected</span>
                  <button type="button" onClick={() => setCustomUrls('')} className="inline-flex items-center gap-1 text-gray-500 hover:text-red-600">
                    <Trash2 className="w-4 h-4" /> Clear
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={submittingCustom}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f3338] text-white px-5 py-3 text-sm font-semibold hover:bg-[#25282d] disabled:opacity-60"
                >
                  {submittingCustom ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {submittingCustom ? 'Submitting...' : 'Submit Custom URLs'}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#2f3338]/10 text-[#2f3338] flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#4a4d52]">IndexNow Config</h2>
                  <p className="text-sm text-gray-500">Verification and endpoint details.</p>
                </div>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Endpoint</dt>
                  <dd className="text-gray-800 break-all">{endpoint}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Key Location</dt>
                  <dd className="break-all">
                    <a href={keyLocation} target="_blank" rel="noopener noreferrer" className="text-[#2f3338] hover:underline inline-flex items-center gap-1">
                      {keyLocation} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {result && (
          <section className={`rounded-3xl border p-6 ${result.ok ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-start gap-3">
              {result.ok ? <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 shrink-0" /> : <AlertCircle className="w-6 h-6 text-red-600 mt-0.5 shrink-0" />}
              <div className="space-y-2 min-w-0">
                <h3 className={`font-semibold text-lg ${result.ok ? 'text-green-800' : 'text-red-800'}`}>
                  {result.ok ? 'Submission Successful' : 'Submission Issue'}
                </h3>
                <p className={`${result.ok ? 'text-green-700' : 'text-red-700'}`}>{result.message}</p>
                {typeof result.submitted === 'number' && <p className={`text-sm ${result.ok ? 'text-green-700' : 'text-red-700'}`}>URLs submitted: {result.submitted}</p>}
                {Array.isArray(result.invalid) && result.invalid.length > 0 && (
                  <div className="text-sm text-red-700">
                    <div className="font-medium">Invalid URLs skipped:</div>
                    <ul className="list-disc pl-5 mt-1 space-y-0.5">
                      {result.invalid.map((u, i) => <li key={i} className="break-all">{u}</li>)}
                    </ul>
                  </div>
                )}
                {Array.isArray(result.results) && result.results.length > 0 && (
                  <div className="mt-3 grid gap-2">
                    {result.results.map((r, i) => (
                      <div key={i} className="text-sm rounded-xl bg-white/70 border border-white px-4 py-3 text-gray-700">
                        <div><span className="font-medium">Status:</span> {r.status}</div>
                        <div><span className="font-medium">Submitted:</span> {r.submitted}</div>
                        <div><span className="font-medium">Message:</span> {r.message}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {history.length > 0 && (
          <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
            <h2 className="font-serif text-xl font-bold text-[#4a4d52] mb-4">Recent Submissions</h2>
            <div className="space-y-3">
              {history.map((h) => (
                <div key={h.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-gray-100 px-4 py-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`inline-flex w-2 h-2 rounded-full ${h.ok ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="font-medium text-gray-800 capitalize">{h.type}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{h.at}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 break-words">{h.message}</p>
                  </div>
                  <div className="text-sm text-gray-500 shrink-0">{h.submitted} URL(s)</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-center gap-3 text-[#2f3338] mb-2">
        {icon}
        <span className="text-sm font-medium text-gray-500">{label}</span>
      </div>
      <div className="text-2xl font-bold text-[#4a4d52]">{value}</div>
    </div>
  );
}

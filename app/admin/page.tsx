import { isAdminAuthenticated } from '@/lib/adminAuth';
import { getAllSiteUrls, INDEXNOW_ENDPOINT, INDEXNOW_KEY_LOCATION } from '@/lib/indexnow';
import AdminDashboard from './AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const authed = await isAdminAuthenticated();
  const urls = getAllSiteUrls();
  return (
    <AdminDashboard
      initialAuthed={authed}
      allUrls={urls}
      keyLocation={INDEXNOW_KEY_LOCATION}
      endpoint={INDEXNOW_ENDPOINT}
    />
  );
}

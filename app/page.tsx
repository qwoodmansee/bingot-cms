import { previewData } from 'next/headers';
import PreviewModeAlert from '../components/preview-mode-alert';
import PreviewSuspense from '../components/preview-suspense';

type AppPreviewData = { token: string } | undefined;
export default async function IndexPage() {
  if ((previewData() as AppPreviewData)?.token) {
    return (
      <PreviewSuspense fallback='Loading...'>
        <PreviewModeAlert />
      </PreviewSuspense>
    );
  }
}

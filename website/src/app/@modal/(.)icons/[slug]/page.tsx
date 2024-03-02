import {IconDetails} from '@/app/icon-details';
import {getIcon, getIcons} from '@/app/utils';
import {notFound} from 'next/navigation';

export async function generateStaticParams() {
  const icons = await getIcons();
  return icons.map(({slug}) => ({slug}));
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function IconDetailsModal({params}: Props) {
  const icon = await getIcon(params.slug);

  if (!icon) return notFound();

  return <IconDetails data={icon} />;
}

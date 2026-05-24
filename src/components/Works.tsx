import { useState, useEffect } from 'react';
import WorksCard from './WorksCard';

type WorksThumbnail = { url: string; height: string; width: string };
type WorksContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: WorksThumbnail;
  title: string;
  date: string;
  category: any;
  url: string;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export default function Works() {
  const [items, setItems] = useState<WorksContent[]>([]);

  useEffect(() => {
    fetch('/api/works')
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold">わーくす</h2>
      <p className="text-sm text-gray-500 mt-0.5 mb-3">Works</p>
      <section className="grid grid-cols-2 min-[600px]:grid-cols-3 gap-3">
        {items.map(item => (
          <WorksCard
            key={item.id}
            imgSrc={item.thumbnail.url}
            title={item.title}
            date={formatDate(item.date)}
            url={item.url}
          />
        ))}
      </section>
    </>
  );
}

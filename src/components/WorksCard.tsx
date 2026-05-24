type Props = {
  imgSrc: string;
  title: string;
  date: string;
  url: string;
};

export default function WorksCard({ imgSrc, title, date, url }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="relative rounded-md aspect-square">
        <img src={imgSrc} className="w-full h-full object-cover rounded-md" />
        <div className="absolute inset-0 bg-black/50 rounded-md flex flex-col items-center justify-center duration-200 opacity-0 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-100 [@media(hover:hover)_and_(pointer:fine)]:hover:backdrop-blur-xs">
          <span className="text-white font-bold text-lg">{title}</span>
          <span className="text-gray-300 text-sm">{date}</span>
        </div>
      </div>
    </a>
  );
}

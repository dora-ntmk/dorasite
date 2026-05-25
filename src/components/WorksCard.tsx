type Props = {
  imgSrc: string;
  title: string;
  date: string;
  url: string;
};

export default function WorksCard({ imgSrc, title, date, url }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col rounded-md aspect-[7/4] ring-1 ring-gray-200 duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-(--color-dorablue)/5 [@media(hover:hover)_and_(pointer:fine)]:hover:ring-(--color-dorablue)">
        <img src={imgSrc} className="w-auto h-full object-cover rounded-sm mt-1 mx-1" />
        <span className="font-bold text-lg mx-1.5">{title}</span>
        <span className="text-gray-500 text-sm mx-1.5 mb-1.5">{date}</span>
      </div>
    </a>
  );
}

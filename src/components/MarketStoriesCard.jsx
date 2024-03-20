import Image from 'next/image';
import Link from 'next/link';

const MarketStoriesCard = ({ id, imgSource, cardHeading, cardBody, url }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link href='/'>
        <Image className="rounded-t-lg" src={imgSource} alt={cardHeading} width={380} height={100} />
      </Link>
      <div className="p-5">
        <a href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{cardHeading}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{cardBody}</p>
      </div>
    </div>
  );
};

export default MarketStoriesCard;

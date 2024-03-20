import marketStories from '@/data/market-stories';
import MarketStoriesCard from '@/components/MarketStoriesCard';

const MarketStories = ({ className }) => {
  return (
    <section className={`relative flex-grow w-3/12 p-5 ${className}`}>
      <h1 className='hidden heading-primary md:block'>Market Stories</h1>
      <div className='grid grid-cols-1 items-center align-middle h-[90%]  py-8 gap-5 overflow-y-scroll '>
        {marketStories.map(story => (
          <MarketStoriesCard
            key={story.id}
            imgSource={story.imgSource}
            cardHeading={story.cardHeading}
            cardBody={story.cardBody}
            url={story.url}
          />
        ))}
      </div>
    </section>
  );
};

export default MarketStories;

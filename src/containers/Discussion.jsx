import { Post } from '@/components';
import posts from '@/data/post';

const Discussion = ({ className }) => {
  return (
    <section
      className={`flex-grow w-6/12 p-2 xl:p-5 h-(90vh) ${className}`}
    >
      <h1 className='hidden ml-8 heading-primary md:block capitalize'>Discussion fourm</h1>
      <div className='px-0 py-3 space-y-2 xs:space-y-3 md:space-y-4 xl:px-10 '>
        {/* Posts */}
        <div className='h-(90vh) py-5 space-y-5 overflow-y-scroll'>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;

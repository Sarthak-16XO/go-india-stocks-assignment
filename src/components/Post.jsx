import { FaRegHeart } from 'react-icons/fa';
import { BiComment, BiShareAlt } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import { Card, UserProfile } from '.';
import { convertToK } from '@/utils/helper';
import Image from 'next/image';

const Post = ({ tag, time, username, userimage, postContent, actions }) => {
  return (
    <Card className='p-2 px-5 space-y-3'>
      {/* Posts */}
      <div className='flex gap-2'>
        <div className='w-[50px]'>
          <Image
            src={userimage}
            alt='user'
            width={50}
            height={50}
            className={`rounded-full`}
          />
        </div>
        <div className='p-2 py-1 space-y-2 md:flex-grow'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-4'>
              <h3 className='font-bold capitalize'>{username}</h3>
              <div className='bg-blue-500 text-white rounded-xl px-2 py-1 flex items-center'>
                <p className='text-sm'>{tag}</p>
              </div>
            </div>

            <p className='text-blue-500'>{time}</p>
          </div>

          {/* Post Content */}
          <div>
            <p>{postContent}</p>
          </div>

          {/* Likes, Comments and Shares of Posts */}
          <footer className='flex flex-row gap-x-6  mt-2 text-sm font-semibold'>
            <div className='post-btn'>
              <button>
                <FaRegHeart className='md:text-xl' />
              </button>
              {convertToK(actions.likes)}
            </div>
            <div className='post-btn'>
              <FiEye className='md:text-xl' />
              {convertToK(actions.views)}
            </div>
            <div className='post-btn'>
              <BiComment className='md:text-xl' />
              {convertToK(actions.comments)} Comments
            </div>
            <div className='post-btn'>
              <BiShareAlt className='md:text-xl' />
              Share
            </div>
          </footer>
        </div>
      </div>
    </Card>
  );
};

export default Post;

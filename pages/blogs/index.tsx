import { PostMetaData, getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { join } from 'path';
import sizeOf from 'image-size';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().map((post) => {
    const { width, height } = sizeOf(join('public', post.thumbnail));

    return {
      ...post,
      thumbnail: {
        src: post.thumbnail,
        width,
        height,
      },
    };
  });
  return {
    props: {
      allPostsData,
    },
  };
}

function BlogCard({
  title,
  date,
  id,
  thumbnail,
}: {
  title: string;
  date: string;
  id: string;
  thumbnail: {
    src: string;
    width: number;
    height: number;
  };
}) {
  return (
    <Link href={`/blogs/${id}`} key={id} passHref>
      <div className="flex h-96 w-[90%] gap-4 rounded-lg bg-slate-100 p-6 drop-shadow-lg hover:cursor-pointer lg:w-[40%]">
        <div className="flex size-full flex-col justify-between gap-4">
          <h1 className="text-xl font-bold lg:text-2xl">{title}</h1>
          <h2 className="text-lg font-semibold  lg:text-xl">{date}</h2>
        </div>

        <Image
          src={thumbnail.src}
          alt="thumbnail"
          width={thumbnail.width}
          height={thumbnail.height}
          objectFit="cover"
        />
        <br />
      </div>
    </Link>
  );
}

type PostMetaDataWithThumbnail = PostMetaData & {
  thumbnail: { src: string; width: number; height: number };
};

export default function Blogs({
  allPostsData,
}: {
  allPostsData: PostMetaDataWithThumbnail[];
}) {
  return (
    <section className="my-16 flex w-full flex-col items-center justify-center">
      {allPostsData.map(({ id, date, title, thumbnail }, index) => (
        <BlogCard
          key={index}
          title={title}
          date={date}
          id={id}
          thumbnail={thumbnail}
        />
      ))}
    </section>
  );
}

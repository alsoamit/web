import { formatDistance } from "date-fns";
import { Metadata } from "next";
import React from "react";

const getPostQuery = (slug: string) => {
  return `
  {
    publication(id: "6600d98d2976a0ba692dbda2") {
      post(
        slug: "${slug}"
      ) {
        id
        slug
        title
        url
        brief
        readTimeInMinutes
        updatedAt
        canonicalUrl
        publishedAt
        author {
          name
          profilePicture
        }
        seo {
          title
          description
        }
        ogMetaData {
          image
        }
        coverImage {
          url
        }
        content {
          html
        }
      }
    }
  }
  `;
};

export const metadata: Metadata = {
  title: "Insight - Alegance",
  description:
    "Explore our curated collection of three insightful and up-to-date tech articles. Delve into recent trends, analyses, and facts that can inform and inspire.",
};

const fetchArticles = async (slug: string) => {
  const token = "dac74c99-17d9-47ea-b12d-74e407435db3";
  const query = getPostQuery(slug);

  const res = await fetch("https://gql.hashnode.com", {
    next: { revalidate: 3600 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();
  return data;
};

export default async function Insight({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchArticles(params.slug);

  return (
    <div className="md:pb-40">
      <div className="h-[300px] md:h-[600px] bg-black z-0">
        <img
          className="h-full w-full object-cover z-0"
          src={
            data.publication.post.coverImage.url ||
            "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e"
          }
          alt="insight"
        />
      </div>
      <div className="py-12 space-y-6 c-container-sm relative -mt-20 min-h-screen text-white bg-black rounded-2xl z-50">
        <div className="">
          <p className="text-xs">
            {data.publication.post.readTimeInMinutes}
            {"  "}mins read
          </p>
        </div>
        <h1 className="text-4xl font-bold">{data.publication.post.title}</h1>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2 justify-center items-center">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src={data.publication.post?.author.profilePicture}
                alt={data.publication.post?.author.name}
              />
              <p>{data.publication.post?.author.name}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-xs">
              Updated{" "}
              {formatDistance(
                new Date(data.publication.post.updatedAt),
                new Date(Date.now()),
              )}{" "}
              ago
            </p>
          </div>
        </div>
        <div
          className="prose max-w-none prose-invert"
          dangerouslySetInnerHTML={{
            __html: data.publication.post.content.html,
          }}
        />
        <div className="flex pt-12 items-center gap-2">
          <p className="text-xs">
            Published{" "}
            {formatDistance(
              new Date(data.publication.post.publishedAt),
              new Date(Date.now()),
            )}{" "}
            ago
          </p>
        </div>
      </div>
    </div>
  );
}

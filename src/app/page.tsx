import Contact from "@/components/homepage/Contact";
import Hero from "@/components/homepage/Hero";
import Insights from "@/components/homepage/Insights";
import Services from "@/components/homepage/Services";
// import Testimonials from "@/components/homepage/Testimonials";
import Work from "@/components/homepage/Work";

const query = `
{
  user(username: "alegance") {
    posts(page: 1, pageSize: 3) {
      nodes {
        id
        slug
        title
        url
        brief
        readTimeInMinutes
        updatedAt
        coverImage {
          url
        }
      }
    }
  }
}
`;

const fetchArticles = async () => {
  const token = "dac74c99-17d9-47ea-b12d-74e407435db3";

  const res = await fetch("https://gql.hashnode.com", {
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

export default async function Home() {
  const data = await fetchArticles();

  return (
    <>
      <Hero />
      <Work />
      <div className="bg-black overflow-x-hidden">
        <Services />
      </div>
      <div className="bg-black">
        <Contact />
      </div>
      <div className="bg-black">
        <Insights posts={data.user.posts.nodes} />
      </div>
    </>
  );
}

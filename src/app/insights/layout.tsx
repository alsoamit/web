import type { Metadata } from "next";
import InsightsProvider from "@/layouts/InsightsProvider";

export const metadata: Metadata = {
  title: "Insights - Alegance",
  description:
    "Explore our curated collection of three insightful and up-to-date tech articles. Delve into recent trends, analyses, and facts that can inform and inspire.",
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <InsightsProvider>{children}</InsightsProvider>;
}

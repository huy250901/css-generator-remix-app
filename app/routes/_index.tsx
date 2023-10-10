import type { LinksFunction, MetaFunction } from "@remix-run/node";
import MainBox, { links as mainbox } from "~/components/Boxshadow/MainBox";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <MainBox />
    </div>
  );
}

export const links: LinksFunction = () => {
  return [...mainbox()];
};

export interface IWorkItem {
  id: number;
  title: string;
  description: string;
  cta: {
    link: string;
    action: (() => void) | null;
    content: string;
    icon: React.ReactNode;
  };
  thumbnail: string;
}

export const work: IWorkItem[] = [
  {
    id: 1,
    title: "PrjctCode",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolores incidunt perspiciatis animi porro accusantium quidem, beatae aperiam qui facilis vero aut temporibus reprehenderit omnis suscipit quos? Voluptate?",
    cta: {
      link: "#",
      action: () => {},
      content: "View Project",
      icon: null,
    },
    thumbnail:
      "https://s3-alpha.figma.com/hub/file/2343262697/04b9f8dd-a0de-4dec-9ff0-ba3d26f9de18-cover.png",
  },
  {
    id: 2,
    title: "Syneurgy",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolores incidunt perspiciatis animi porro accusantium quidem, beatae aperiam qui facilis vero aut temporibus reprehenderit omnis suscipit quos? Voluptate?",
    cta: {
      link: "#",
      action: null,
      content: "View Project",
      icon: null,
    },
    thumbnail:
      "https://s3-alpha.figma.com/hub/file/2343262697/04b9f8dd-a0de-4dec-9ff0-ba3d26f9de18-cover.png",
  },
  {
    id: 3,
    title: "CadenceUI",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolores incidunt perspiciatis animi porro accusantium quidem, beatae aperiam qui facilis vero aut temporibus reprehenderit omnis suscipit quos? Voluptate?",
    cta: {
      link: "#",
      action: null,
      content: "Coming Soon",
      icon: null,
    },
    thumbnail:
      "https://s3-alpha.figma.com/hub/file/2343262697/04b9f8dd-a0de-4dec-9ff0-ba3d26f9de18-cover.png",
  },
];

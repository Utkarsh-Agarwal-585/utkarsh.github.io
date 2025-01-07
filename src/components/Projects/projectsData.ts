import { nodejs, typescript, aws, postgresql, redis, graphql, express, python, elasticsearch, docker, fastapi, nextjs, react, google_Ads } from '../../assets/icons';

export const projects = [
  {
    title: "Google Customer Match",
    description: "Engineered Google Customer Match Uploads service for Google Ads",
    impact: [
      "Reduced data upload time by 35% through efficient Google Ads API integration",
      "Overcame the limitation of direct publisher platform uploads",
      "Improved data processing efficiency by 30%"
    ],
    technologies: [
      { name: "Python", icon: python },
      { name: "Google Ads API", icon: google_Ads }
    ]
  },
  {
    title: "AMP Email Editor",
    description: "An advanced Email editor supporting both HTML and AMP templates for email campaign",
    impact: [
      "Escalated user engagement by 25% by improving and implementing additional features which support drag-n-drop",
      "Implemented key features including Save Page, block components, full-screen,redo/undo, AMP compatibility, resizing and server-side rendering(SSR)",
      "Backend service for storing AMP Email Responses either in Multipart or Raw data into Elasticsearch",
      "RESTful API to get analytics metrics of campaign submission, clicks, views and geolocation for creation of AMP Emails"
    ],
    technologies: [
      { name: "Node.js", icon: nodejs },
      { name: "ExpressJS", icon: express },
      { name: "React.js", icon: react },
      { name: "Redis", icon: redis },
      { name: "Elasticsearch", icon: elasticsearch },
      { name: "Docker", icon: docker }
    ]
  },
  {
    title: "LinkNest",
    description: "A scalable MVP similar to Linktree",
    impact: [
      "Improved user profile consolidation by 30% resulting in increased engagement",
      "Enabling the consolidation of multiple proﬁles under a single unique link",
    ],
    technologies: [
      { name: "Python", icon: python },
      { name: "FastAPI", icon: fastapi },
      { name: "TypeScript", icon: typescript },
      { name: "Next.js", icon: nextjs },
      { name: "AWS", icon: aws }
    ]
  },
  {
    title: "WhatsAppBot Pro",
    description: "A highly reliable and secure WhatsApp chatbot to enhance customer engagement",
    impact: [
      "Boosted customer engagement by 30%",
      "Implemented the process of enabling HITL intervention to involve human agents in addressing complex scenarios",
    ],
    technologies: [
      { name: "Node.js", icon: nodejs },
      { name: "PostgreSQL", icon: postgresql },
      { name: "GraphQL", icon: graphql }
    ]
  }
];
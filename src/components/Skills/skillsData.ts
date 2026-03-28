import { 
  nodejs, typescript, aws, mongodb, postgresql, mysql,
  redis, graphql, express, javascript, python,
  react,
  nextjs,
  docker,
  git,
  linux,
  rabbitmq,
  java,
  nestjs,
  springboot,
  kafka,
  bitbucket,
  kubernetes,
  Grafana,
  openai,
  claude,
  n8n,
  cursor,
  kiro,
  mcp,
  aiGeneric
} from '../../assets/icons';

export const skillCategories = [
  {
    category: "Languages & Core",
    skills: [
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Java", icon: java },
      { name: "Python", icon: python },
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: express },
      { name: "NestJS", icon: nestjs },
      { name: "Spring Boot", icon: springboot },
      { name: "React", icon: react },
      { name: "NextJS", icon: nextjs },
      { name: "GraphQL", icon: graphql },
      {name: "Kafka", icon: kafka},
      { name: "RabbitMQ", icon: rabbitmq }
    ]
  },
  {
    category: "Databases & Cache",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "MongoDB", icon: mongodb },
      { name: "Redis", icon: redis }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: aws },
      { name: "Docker", icon: docker },
      {name: "Kubernetes", icon: kubernetes},
      {name: "Bitbucket", icon: bitbucket},
      {name: "Grafana", icon: Grafana},
      { name: "Git", icon: git },
      { name: "Linux", icon: linux }
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "OpenAI", icon: openai },
      { name: "Claude", icon: claude },
      { name: "Cursor", icon: cursor },
      { name: "Kiro", icon: kiro },
      { name: "MCP", icon: mcp },
      { name: "n8n", icon: n8n }
    ]
  }
];
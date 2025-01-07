import { 
  nodejs, typescript, aws, mongodb, postgresql, mysql,
  redis, graphql, express, javascript, python,
  react,
  nextjs,
  docker,
  fastapi,
  git,
  linux,
  rabbitmq
} from '../../assets/icons';

export const skillCategories = [
  {
    category: "Languages & Core",
    skills: [
      { name: "Python", icon: python },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: express },
      { name: "React", icon: react },
      { name: "NextJS", icon: nextjs },
      { name: "FastAPI", icon: fastapi },
      { name: "GraphQL", icon: graphql },
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
      { name: "Git", icon: git },
      { name: "Linux", icon: linux }
    ]
  }
];
import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'booklist',
    name: 'Booklist',
    description: '书单收集、标准化与对比工具。支持从豆瓣等平台爬取书单，进行数据标准化和去重，支持多书单合并和频次排序。',
    techStack: ['FastAPI', 'SQLAlchemy', 'BeautifulSoup', 'Python'],
    status: 'active',
    category: 'tools',
    githubUrl: 'https://github.com/yourusername/booklist',
    apiUrl: 'https://your-api-url.com/docs',
  },
  // 你可以在这里添加更多项目
  // {
  //   id: 'project2',
  //   name: '项目名称',
  //   description: '项目描述',
  //   techStack: ['React', 'TypeScript'],
  //   status: 'completed',
  //   category: 'development',
  //   demoUrl: 'https://example.com',
  //   githubUrl: 'https://github.com/yourusername/project2',
  // },
]

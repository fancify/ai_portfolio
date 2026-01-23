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
  {
    id: 'btc-cycle-strategy',
    name: 'BTC 周期交易策略回测平台',
    description: '基于多因子分析的比特币周期交易策略回测系统，等市场周期指标，支持自定义策略参数配置、收益曲线可视化、套利收益叠加分析，帮助投资者验证和优化交易策略。',
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'tRPC',
      'Tailwind CSS',
      'Recharts',
      'Drizzle ORM',
      'PostgreSQL (Supabase)',
      'Vercel Serverless'
    ],
    status: 'active',
    demoUrl: 'https://btc-cycle.chenfan.space'
  },
  {
    id: 'celebrity-book-recommendations',
    name: 'Meta Reading List / 名人推荐书籍数据库',
    description: '收录18位硅谷科技领袖推荐的785本书籍，包含1800+条详细推荐语。支持按推荐人筛选、多维度排序，全中文界面，所有书籍配有封面、简介和推荐来源。',
    techStack: ['React 19', 'TypeScript', 'tRPC 11', 'Tailwind CSS 4', 'Node.js', 'MySQL', 'S3'],
    status: 'active',
    category: 'tools',
    githubUrl: 'https://github.com/yourusername/celebrity-book-recommendations', // 需要替换为实际URL

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

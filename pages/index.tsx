import Head from 'next/head'
import { useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { ProjectCategory } from '@/types/project'

const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'development', label: '开发' },
  { id: 'research', label: '研究' },
  { id: 'learning', label: '学习' },
  { id: 'tools', label: '工具' },
  { id: 'other', label: '其他' },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      <Head>
        <title>AI Projects Portfolio</title>
        <meta name="description" content="个人AI项目作品集" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <header className="header">
          <h1 className="title">Always Day 1</h1>
          <p className="subtitle">ChenFan AI Projects Portfolio</p>
        </header>
        
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tag ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </>
  )
}

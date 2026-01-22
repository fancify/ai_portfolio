export type ProjectStatus = 'active' | 'completed' | 'planned'
export type ProjectCategory = 'all' | 'development' | 'research' | 'learning' | 'tools' | 'other'

export interface Project {
  id: string
  name: string
  description: string
  techStack?: string[]
  status?: ProjectStatus
  category?: ProjectCategory
  demoUrl?: string
  githubUrl?: string
  apiUrl?: string
  imageUrl?: string
}

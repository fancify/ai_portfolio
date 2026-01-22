import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleCardClick = () => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="project-card" onClick={handleCardClick}>
      <div className="project-header">
        <h2 className="project-title">{project.name}</h2>
        {project.status && (
          <span className={`status-badge status-${project.status}`}>
            {project.status === 'active' ? '进行中' : 
             project.status === 'completed' ? '已完成' : '计划中'}
          </span>
        )}
      </div>
      
      <p className="project-description">{project.description}</p>
      
      {project.techStack && project.techStack.length > 0 && (
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
      
      <div className="project-links">
        {project.demoUrl && (
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-button primary"
            onClick={(e) => e.stopPropagation()}
          >
            访问项目
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-button secondary"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        )}
        {project.apiUrl && (
          <a 
            href={project.apiUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-button secondary"
            onClick={(e) => e.stopPropagation()}
          >
            API文档
          </a>
        )}
      </div>
    </div>
  )
}

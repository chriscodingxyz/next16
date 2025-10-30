'use client'

import { useState } from 'react'
import { ProjectsSection } from './projects-section.client'
import { ExperienceSection } from './experience-section.client'
import type { Project, Experience } from '@/types'

type FolderType = 'projects' | 'experience'

interface FolderContainerProps {
  projects: Project[]
  experiences: Experience[]
}

export function FolderContainer({ projects, experiences }: FolderContainerProps) {
  const [activeFolder, setActiveFolder] = useState<FolderType>('projects')

  return (
    <div className='grid'>
      {activeFolder === 'projects' ? (
        <>
          <ExperienceSection
            experiences={experiences}
            isActive={false}
            onClick={() => setActiveFolder('experience')}
          />
          <ProjectsSection
            projects={projects}
            isActive={true}
            onClick={() => setActiveFolder('projects')}
          />
        </>
      ) : (
        <>
          <ProjectsSection
            projects={projects}
            isActive={false}
            onClick={() => setActiveFolder('projects')}
          />
          <ExperienceSection
            experiences={experiences}
            isActive={true}
            onClick={() => setActiveFolder('experience')}
          />
        </>
      )}
    </div>
  )
}

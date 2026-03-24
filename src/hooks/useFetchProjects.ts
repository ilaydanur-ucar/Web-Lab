import { useState, useEffect } from 'react'
import type { Project } from '../types/project'
import { fetchProjects } from '../services/projectService'

interface UseFetchProjectsResult {
  projects: Project[]
  loading: boolean
  error: string | null
}

export function useFetchProjects(): UseFetchProjectsResult {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProjects()
        if (!cancelled) setProjects(data)
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : 'Bilinmeyen hata olustu'
          )
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  return { projects, loading, error }
}

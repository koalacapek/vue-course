interface CompanyType {
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}

export interface JobType {
  title: string
  description: string
  salary: string
  location: string
  type: string
  id: string
  company: CompanyType
}

export interface EditJobType {
  job: JobType
  isLoading: boolean
}

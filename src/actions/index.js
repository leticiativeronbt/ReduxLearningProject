export function selectJob (job) {
  return {
    type: 'JOB_SELECTED',
    payload: job
  }
}

export function getJobs () {
  return {
    type: 'JOB_LIST',
    payload: jobs()
  }
}

const jobs = () => (
  [
    {
      id: 1, title: '.NET Developer', skills: ['.NET', 'Software Development'], level: 'Junior', company: 'ATG'
    },
    {
      id: 2, title: 'Accounts Manager', skills: ['dont know'], level: 'Senior', company: 'facebook'
    },
    {
      id: 3, title: 'Web Designer', level: 'Intern', company: 'Amazon'
    },
    {
      id: 4, title: 'Python Developer', level: 'Pleno', company: 'Google'
    }
  ]
)

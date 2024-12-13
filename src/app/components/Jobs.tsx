import React from 'react'
import JobRow from './JobRow'

function Jobs() {
  return (
        <section className='absolute left-0 w-full bg-slate-200 rounded-3xl'>
            <div className='container max-w-4xl mx-auto py-4 px-6'>
                <h2 className='font-bold mb-4'>Recent Jobs</h2>
                <div className='flex flex-col gap-4'>
                    <JobRow/>
                    <JobRow/>
                    <JobRow/>
                    <JobRow/>
                </div>
            </div> 
        </section>
  )
}

export default Jobs

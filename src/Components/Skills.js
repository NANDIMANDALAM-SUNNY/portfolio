import React from 'react'
import './Styles.css'
const Skills = () => {
  let TechnicalSkill = [
      { name:"HTML",val:"80" },
      {name:"CSS",val:"80"},
    {name:"JavaScript",val:"95"},
  {name:"React JS", val:"90"},
{name:"Node Js",val:"90"},
{name:"MongoDb",val:"75"},
{name:"C/C++",val:"70"}]
  let SoftSkill = [
    {name:"Humanity",val:"100"},
    {name:"Communication",val:"90"},
    {name:"Programming",val:"95"},
    {name:"Team Player",val:"80"},
  {name:"Multi-tasking", val:"90"},
{name:"Constant Learning",val:"90"},
{name:"Adaptability",val:"85"},
{name:"Problem Solving",val:"70"}
  ]
  let colors = ["primary","secondary","success","danger","warning","info","dark",]
  let skillColor = ["#0d6efd","#6c757d","#28a745","#dc3545","#ffc107","#17a2b8","#d63384","#fd7e14","#6610f2"]
  return (
    <section className='container skill' id='skills'>
      <h1>SKILLS</h1>
      <div className='skillSet'>
        <div className='skill-one'>
          {TechnicalSkill && TechnicalSkill.map((set,ind)=>(
            <div key={ind} className="individual-skill">
              <h5>{set.name}</h5>
              <div className="progress">
              <div className={`progress-bar bg-${colors[ind]}`} role="progressbar" style={{width: `${set.val}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
          ))}
        </div>
        <div className='skill-two'>
        {SoftSkill && SoftSkill.map((set,ind)=>(
            <div key={ind} className={`softskills individual-skill`}>
              <button style={{backgroundColor:`${skillColor[ind]}`}} className={`btn btn-lg anibutton`}>{set.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
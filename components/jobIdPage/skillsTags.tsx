export function SkillTags() {
    const skills = ["Web Design", "Mockup"]
  
    return (
      <div className="space-y-4">
        <h2 className="font-semibold">Skills and Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    )
  }
  
  
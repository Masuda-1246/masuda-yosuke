import React from 'react';
import { Code, Server, Wrench, Cloud } from 'lucide-react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiGo, SiPython, SiMysql, SiPostgresql,
  SiGit, SiDocker, SiTerraform, SiSwagger,
  SiGooglecloud, SiGithubactions, SiMicrosoftazure
} from 'react-icons/si';

import { FaAws } from "react-icons/fa";


const Skills = () => {
  const skillCategories = [
    {
      title: 'フロントエンド',
      icon: Code,
      skills: [
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'React', icon: SiReact, color: 'text-cyan-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
        { name: 'NextJS', icon: SiNextdotjs, color: 'text-black' },
      ],
    },
    {
      title: 'バックエンド',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
        { name: 'Go', icon: SiGo, color: 'text-blue-500' },
        { name: 'Python', icon: SiPython, color: 'text-yellow-600' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      ],
    },
    {
      title: 'ツール',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: SiGit, color: 'text-orange-600' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-600' },
        { name: 'Terraform', icon: SiTerraform, color: 'text-purple-600' },
        { name: 'Swagger', icon: SiSwagger, color: 'text-green-500' },
      ],
    },
    {
      title: 'その他',
      icon: Cloud,
      skills: [
        { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
        { name: 'Azure', icon: SiMicrosoftazure, color: 'text-blue-600' },
        { name: 'GCP', icon: SiGooglecloud, color: 'text-red-500' },
        { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-gray-800' },
      ],
    },
  ];

  return (
    <section id="skills" className="pt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-7 w-7 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                  >
                    <skill.icon 
                      className={`h-8 w-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                    <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
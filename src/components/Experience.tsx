import React from 'react';
import { Building2, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: '大規模システムのバックエンド開発',
      role: 'バックエンドエンジニア/インターン',
      company: 'MIXI',
      description: 'TIPSTARというアプリの機能の設計・開発に従事',
      icon: Building2,
    },
    {
      title: 'AIシステムのフルスタック開発',
      role: 'ソフトウェアエンジニア/インターン',
      company: 'PKSHA Technologies',
      description: 'LLMを活用したサービスのフロントエンド、バックエンド、インフラを設計・実装',
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="pt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <exp.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium mt-1">{exp.role}</p>
                  <p className="text-gray-600 mt-1">{exp.company}</p>
                  <p className="text-gray-500 mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { Code2, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Code2 className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">専門性</h3>
            <p className="text-gray-600">
              フルスタックエンジニア、最新のAIを使ったサービスの構築に興味あり
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Brain className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">主要なスキル</h3>
            <p className="text-gray-600">
              React, TypeScript, Python, Go, AWS, Terraform
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Rocket className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">興味分野</h3>
            <p className="text-gray-600">
              AIサービス・最新技術が好きで日々情報をキャッチアップ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
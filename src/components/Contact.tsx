import React from 'react';
import { Github, BookOpen, Mail } from 'lucide-react';

const Contact = () => {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/Masuda-1246',
      icon: Github,
    },
    {
      name: 'Zenn',
      url: 'https://zenn.dev/masuda1112',
      icon: BookOpen,
    },
  ];

  return (
    <section id="contact" className="pt-16 pb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="space-y-4">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <link.icon className="h-5 w-5 mr-2" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                お気軽にご連絡ください。新しいプロジェクトや機会についてディスカッションできることを楽しみにしています。
              </p>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
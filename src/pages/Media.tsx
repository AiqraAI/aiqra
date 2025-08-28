import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, ExternalLink, Play, FileText, Mic } from 'lucide-react';

const Media = () => {
  const featuredArticles = [
    {
      title: 'The Future of AI in Middle Eastern Telecommunications',
      excerpt: 'How artificial intelligence is revolutionizing network operations and customer service across the GCC region.',
      author: 'Dr. Sarah Al-Kindi',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'AI Innovation',
      type: 'article',
      image: '/api/placeholder/400/240',
      featured: true,
    },
    {
      title: 'Robotics in Education: Transforming STEM Learning in Oman',
      excerpt: 'Our comprehensive analysis of how educational robotics is preparing students for the jobs of tomorrow.',
      author: 'Ahmed Al-Rashid',
      date: '2024-12-10',
      readTime: '6 min read',
      category: 'Education Tech',
      type: 'article',
      image: '/api/placeholder/400/240',
    },
    {
      title: 'AICRA.ai Wins Regional Innovation Award',
      excerpt: 'Recognition for our groundbreaking work in autonomous systems and AI-powered business solutions.',
      author: 'AICRA.ai Team',
      date: '2024-12-05',
      readTime: '3 min read',
      category: 'Company News',
      type: 'news',
      image: '/api/placeholder/400/240',
    },
  ];

  const recentPosts = [
    {
      title: 'Building Ethical AI: Our Framework for Responsible Innovation',
      author: 'Dr. Fatima Al-Zahra',
      date: '2024-12-08',
      readTime: '10 min read',
      category: 'AI Ethics',
      type: 'article',
    },
    {
      title: 'Partnership Announcement: Expanding AI Solutions Across GCC',
      author: 'AICRA.ai Team',
      date: '2024-12-03',
      readTime: '4 min read',
      category: 'Partnerships',
      type: 'news',
    },
    {
      title: 'Deep Dive: Neural Networks in Real Estate Valuation',
      author: 'Omar Al-Balushi',
      date: '2024-11-28',
      readTime: '12 min read',
      category: 'Technical Insights',
      type: 'article',
    },
    {
      title: 'Industry Report: AI Adoption Trends in Middle East',
      author: 'Research Team',
      date: '2024-11-25',
      readTime: '15 min read',
      category: 'Market Analysis',
      type: 'report',
    },
  ];

  const mediaTypes = [
    {
      icon: FileText,
      title: 'Articles & Insights',
      count: '25+ Articles',
      description: 'In-depth analysis of AI trends, technical insights, and industry perspectives.',
    },
    {
      icon: Play,
      title: 'Video Content',
      count: '15+ Videos',
      description: 'Product demos, conference talks, and educational content on AI and robotics.',
    },
    {
      icon: Mic,
      title: 'Podcasts & Interviews',
      count: '10+ Episodes',
      description: 'Expert discussions on AI innovation, career insights, and industry trends.',
    },
  ];

  const categories = [
    'AI Innovation',
    'Robotics',
    'Education Tech',
    'Company News',
    'Technical Insights',
    'Market Analysis',
    'Partnerships',
    'AI Ethics'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Media & 
              <span className="block text-secondary-brand">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Stay informed with the latest developments in AI and robotics innovation, 
              industry insights, and AICRA.ai company updates from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary-brand rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <div className="text-primary font-medium mb-2">{type.count}</div>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
              Featured Content
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our most popular articles, insights, and updates on AI and robotics innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Featured Article */}
            <div className="lg:col-span-1">
              <div className="card-elegant group hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary-brand rounded-xl mb-6 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white" />
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary-brand rounded-full text-sm font-medium">
                    {featuredArticles[0].category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {featuredArticles[0].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredArticles[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredArticles[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(featuredArticles[0].date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {featuredArticles[0].readTime}
                  </div>
                </div>
                
                <Button className="btn-hero group w-full">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Secondary Featured Articles */}
            <div className="space-y-6">
              {featuredArticles.slice(1).map((article, index) => (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className="flex space-x-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary-brand to-accent-brand rounded-lg flex items-center justify-center flex-shrink-0">
                      {article.type === 'news' ? (
                        <Mic className="w-8 h-8 text-white" />
                      ) : (
                        <FileText className="w-8 h-8 text-white" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary-brand rounded text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                      
                      <h4 className="font-semibold mb-2 leading-tight">
                        {article.title}
                      </h4>
                      
                      <div className="flex items-center text-xs text-muted-foreground space-x-3">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
              
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <div key={index} className="card-elegant group hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button className="btn-secondary">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="card-elegant sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200"
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold mb-4">Newsletter</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to receive the latest AI and robotics insights directly to your inbox.
                  </p>
                  <Button className="btn-hero w-full">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-secondary-brand text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Follow AICRA.ai for the latest insights on AI and robotics innovation, 
            industry trends, and company updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Subscribe to Newsletter
            </Button>
            <Link to="/contact">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                Media Inquiries
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
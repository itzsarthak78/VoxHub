'use client'

import Link from 'next/link'
import { 
  MessageSquare, 
  Users, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Image,
  File,
  Shield,
  Zap,
  Globe,
  Github,
  Chrome
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: MessageSquare,
    title: 'Real-time Chat',
    description: 'Instant messaging with typing indicators, reactions, and replies.',
    color: 'text-[#3B82F6]'
  },
  {
    icon: Image,
    title: 'Image Sharing',
    description: 'Share images instantly with drag and drop support.',
    color: 'text-[#8B5CF6]'
  },
  {
    icon: File,
    title: 'File Sharing',
    description: 'Share any file type with your group members.',
    color: 'text-[#F59E0B]'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Secure communication with row level security and encryption.',
    color: 'text-[#10B981]'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time updates with Supabase Realtime and WebSockets.',
    color: 'text-[#F472B6]'
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Connect with people from anywhere in the world.',
    color: 'text-[#60A5FA]'
  }
]

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#050816]">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">
                  Vox<span className="text-[#3B82F6]">Hub</span>
                </span>
              </Link>

              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB]/5 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/20 border border-[#2563EB]/30 rounded-full text-sm text-[#3B82F6] font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Next Generation Communication
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Connect. <span className="text-[#3B82F6]">Chat.</span> Share.
                </h1>
                
                <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                  Create private groups, chat in real-time, and share images and files with your friends.
                  Experience communication like never before.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-white font-semibold rounded-full transition-all"
                  >
                    Login
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                    Free forever
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                    No credit card
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                    Open source
                  </span>
                </div>
              </motion.div>

              {/* Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-16"
              >
                <div className="glass rounded-3xl p-6 border border-white/10 max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold"># general</div>
                      <div className="text-xs text-slate-400">12 members online</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {[
                      { user: 'Sarthak', message: 'Hey everyone! 👋', color: 'text-[#3B82F6]' },
                      { user: 'Aryan', message: 'Check out this image I shared 📸', color: 'text-[#10B981]' },
                      { user: 'Rahul', message: 'Great work everyone!', color: 'text-[#F59E0B]' },
                    ].map((msg, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB]/30 to-[#3B82F6]/30 rounded-full flex items-center justify-center text-xs font-semibold">
                          {msg.user[0]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-semibold ${msg.color}`}>{msg.user}</span>
                            <span className="text-xs text-slate-500">just now</span>
                          </div>
                          <p className="text-sm text-slate-300">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Everything you need to <span className="text-[#3B82F6]">connect</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Powerful features designed for modern communication. Chat, share, and collaborate
                with your team and friends.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 hover:border-[#2563EB]/30 transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.color.replace('text', 'bg').replace('text-', 'bg-')}/20 flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-transparent" />
              <div className="relative">
                <h2 className="text-4xl font-bold mb-4">
                  Ready to start <span className="text-[#3B82F6]">connecting</span>?
                </h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                  Join thousands of users already using VoxHub for their daily communication.
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">
                  Vox<span className="text-[#3B82F6]">Hub</span>
                </span>
              </div>
              <div className="flex gap-6 text-sm text-slate-400">
                <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                <Link href="#" className="hover:text-white transition-colors">Support</Link>
              </div>
              <div className="text-sm text-slate-500">
                © 2026 VoxHub. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

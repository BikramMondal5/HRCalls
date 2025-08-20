import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Briefcase,
  Target,
  TrendingUp,
  Palette,
  Code,
  Upload,
  Shield,
  Bell,
  BarChart3,
  Building2,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  HRCalls
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Recruiters
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Applicants
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                Explore Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  The home of your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    dream job
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  AI-powered platform connecting skilled applicants with recruiters through intelligent matching and
                  insights.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-3"
                >
                  Explore More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <Card className="bg-gray-900 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-white">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-white">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-white">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>AL</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">300k</div>
                      <div className="text-sm text-gray-300">Active Users</div>
                      <div className="text-xs text-gray-400">
                        We have over 300k satisfied and happy users around the world
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/hero-section.png"
                  alt="Connecting talent with opportunity"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">+100,00K</div>
                  <div className="text-xs text-gray-600">
                    Over The World 100,00+
                    <br />
                    Available Vacancy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Work With Exciting <span className="text-orange-500">100+</span> Companies In The World
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="w-8 h-8 bg-yellow-400 rounded"></div>
              <span>Opentable</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <span>shopify</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
              <span>slack</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <span>amazon</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="w-8 h-8 bg-orange-600 rounded"></div>
              <span>HubSpot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Provide Many Features You Can Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give you a complete account of the system, and expound the actual teachings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                jobs: "43 Job Available",
                color: "bg-orange-100 text-orange-600",
              },
              { icon: Palette, title: "UI/UX Design", jobs: "12 Job Available", color: "bg-blue-100 text-blue-600" },
              {
                icon: Briefcase,
                title: "Project Management",
                jobs: "32 Job Available",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Target,
                title: "Business & Consulting",
                jobs: "21 Job Available",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: Palette,
                title: "Graphic Designer",
                jobs: "54 Job Available",
                color: "bg-pink-100 text-pink-600",
              },
              {
                icon: Code,
                title: "Software Development",
                jobs: "87 Job Available",
                color: "bg-indigo-100 text-indigo-600",
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.jobs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Build your Personal Account Profile</h2>
                <p className="text-lg text-gray-600 mb-8">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                  and I will give you a complete account of the system, and expound the actual teachings.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Upload, title: "Upload Resume", desc: "Easily upload and manage your professional resume" },
                  {
                    icon: BarChart3,
                    title: "AI Resume Fit Score",
                    desc: "Get AI-powered insights on how well your resume matches job requirements",
                  },
                  { icon: Shield, title: "Secure Vault", desc: "Keep your personal information safe and secure" },
                  { icon: Bell, title: "New Interview Alerts", desc: "Get notified about new interview opportunities" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                Explore More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/profile-section.png"
                  alt="Profile building"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating profile elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Profile Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Job Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enter company link + role → Get AI insights, culture overview, and fit score to make informed career
              decisions.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Company Analysis</h3>
                  <p className="text-sm text-gray-600">Deep insights into company culture and values</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fit Score</h3>
                  <p className="text-sm text-gray-600">AI-calculated compatibility rating</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Role Insights</h3>
                  <p className="text-sm text-gray-600">Detailed role requirements and expectations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say About Us</h2>
            <p className="text-lg text-gray-600">Hear from professionals who found their dream jobs through HRCalls</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amanda Gonzalez",
                role: "Product Manager",
                company: "Tech Startup",
                content:
                  "HRCalls helped me find the perfect role that matches my skills and career goals. The AI insights were incredibly accurate!",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                company: "Enterprise Corp",
                content:
                  "The resume analysis feature gave me actionable feedback that helped me land interviews at top companies.",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "Agency Inc",
                content:
                  "As a hiring manager, HRCalls has streamlined our recruitment process and helped us find candidates who truly fit our culture.",
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have found their dream jobs through our AI-powered platform.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                HRCalls
              </h3>
              <p className="text-gray-400 mb-4">
                AI-powered platform connecting skilled applicants with recruiters through intelligent matching.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Applicants</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Create Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    AI Resume Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Career Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Recruiters</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Post Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Talent Search
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    AI Matching
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Hiring Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HRCalls. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

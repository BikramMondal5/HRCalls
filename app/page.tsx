import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
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
    <div className="min-h-screen bg-background dark:dark-gradient-bg">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50 dark:bg-background/80 dark:backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-purple-gradient">HRCalls</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-foreground hover:text-purple-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Recruiters
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Applicants
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Explore Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  The home of your <span className="text-purple-gradient">dream job</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  AI-powered platform connecting skilled applicants with recruiters through intelligent matching and
                  insights.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <Card className="bg-card border-border card-shadow-purple dark:purple-glow dark:purple-border-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>AL</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-500">300k</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                      <div className="text-xs text-muted-foreground">
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
                  src="/placeholder.svg?height=500&width=400"
                  alt="Professional candidate"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border dark:purple-border-glow">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Available</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-lg border border-border dark:purple-border-glow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">+100,00K</div>
                  <div className="text-xs text-muted-foreground">
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
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-gradient mb-4">
              Work With Exciting <span className="text-orange-500">100+</span> Companies In The World
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
              <div className="w-8 h-8 bg-yellow-400 rounded"></div>
              <span>Opentable</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <span>shopify</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
              <span>slack</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <span>amazon</span>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
              <div className="w-8 h-8 bg-orange-600 rounded"></div>
              <span>HubSpot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-gradient mb-4">We Provide Many Features You Can Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                jobs: "12 Job Available",
                color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
              },
              {
                icon: Briefcase,
                title: "Project Management",
                jobs: "32 Job Available",
                color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
              },
              {
                icon: Target,
                title: "Business & Consulting",
                jobs: "21 Job Available",
                color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
              },
              {
                icon: Palette,
                title: "Graphic Designer",
                jobs: "54 Job Available",
                color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
              },
              {
                icon: Code,
                title: "Software Development",
                jobs: "87 Job Available",
                color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-border card-shadow-purple dark:purple-glow dark:purple-border-glow hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.jobs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Profile Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-purple-gradient mb-6">Build your Personal Account Profile</h2>
                <p className="text-lg text-muted-foreground mb-8">
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
                    <div className="bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 p-3 rounded-lg">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Explore More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-purple-500 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=350"
                  alt="Profile building"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating profile elements */}
              <div className="absolute -top-4 -right-4 bg-card p-3 rounded-full shadow-lg border border-border dark:purple-border-glow">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-lg border border-border dark:purple-border-glow">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Profile Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-gradient mb-4">AI-Powered Job Research</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enter company link + role → Get AI insights, culture overview, and fit score to make informed career
              decisions.
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-border card-shadow-purple dark:purple-glow dark:purple-border-glow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-purple-200 dark:border-purple-800 card-shadow-purple dark:purple-glow">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Company Analysis</h3>
                  <p className="text-sm text-muted-foreground">Deep insights into company culture and values</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 dark:border-green-800 card-shadow-purple dark:purple-glow">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Fit Score</h3>
                  <p className="text-sm text-muted-foreground">AI-calculated compatibility rating</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 dark:border-orange-800 card-shadow-purple dark:purple-glow">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Role Insights</h3>
                  <p className="text-sm text-muted-foreground">Detailed role requirements and expectations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-gradient mb-4">What Our Clients Say About Us</h2>
            <p className="text-lg text-muted-foreground">
              Hear from professionals who found their dream jobs through HRCalls
            </p>
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
                name: "Jacob Joshua",
                role: "Chief Executive",
                company: "Fortune 500",
                content:
                  "The platform's ability to match candidates with company culture is outstanding. We found our best hires through HRCalls.",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Sarah Johnson",
                role: "UX Designer",
                company: "Design Agency",
                content:
                  "The AI-powered resume analysis helped me optimize my profile and land interviews at top companies. Highly recommended!",
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-border card-shadow-purple hover:shadow-xl transition-all duration-300 dark:purple-glow dark:purple-border-glow hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-800/30 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start your journey with HRCalls today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream jobs through our AI-powered platform.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 dark:bg-card/50 dark:backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-purple-gradient mb-4">HRCalls</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                AI-powered recruitment platform connecting talented professionals with their dream opportunities.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold text-white">in</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                  <span className="text-sm font-bold text-white">tw</span>
                </div>
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 cursor-pointer transition-colors">
                  <span className="text-sm font-bold text-muted-foreground">gh</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    Recruiters
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    Applicants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 HRCalls. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

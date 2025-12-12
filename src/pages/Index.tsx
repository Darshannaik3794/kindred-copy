import { Heart, Star, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const Index = () => {
  return (
    <div className="min-h-screen gradient-warm">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">FitFamily</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Classes</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Trainers</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
          <Button variant="soft" size="sm">Join Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">Your happy place awaits</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground">
                Move Your Body,{" "}
                <span className="text-gradient">Love Your Life</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Join a community that celebrates every rep, every step, and every win. 
                We're not just a gym — we're your biggest cheerleaders.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl">
                  <Heart className="w-5 h-5" />
                  Start Your Journey
                </Button>
                <Button variant="outline" size="xl">
                  Try a Free Class
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full gradient-hero border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-bold"
                      >
                        {["J", "S", "M", "A"][i - 1]}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">10,000+</strong> happy members
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">4.9 rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img 
                  src={heroImage} 
                  alt="Happy people working out together in a bright modern gym" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Voted #1</p>
                    <p className="text-sm text-muted-foreground">Friendliest Gym 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why You'll <span className="text-gradient">Love</span> It Here
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every workout feels like hanging out with friends who really, really want you to succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Supportive Coaches",
                description: "Our trainers know your name, your goals, and exactly how to hype you up on tough days."
              },
              {
                icon: Users,
                title: "Welcoming Community",
                description: "High-fives, not side-eyes. Everyone here started somewhere — and we're all in this together."
              },
              {
                icon: Sparkles,
                title: "Fun Workouts",
                description: "From dance cardio to strength training, find classes that make you forget you're exercising."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="gradient-hero rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Ready to Feel Amazing?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
                Your first class is on us. No pressure, no judgment — just good vibes and a great workout.
              </p>
              <Button 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90 shadow-soft hover:shadow-glow rounded-2xl font-bold"
              >
                Claim Your Free Class
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">FitFamily</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 FitFamily. Made with love for people who move.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

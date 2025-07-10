import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { QuoteModal } from '@/components/QuoteModal';
import { Toaster } from '@/components/ui/toaster';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Waves, Droplets, Wrench, Star, CheckCircle, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#testimonials', label: 'Testimonials' },
];

const services = [
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: 'Weekly Pool Service',
    description: 'Consistent, reliable weekly cleaning to keep your pool sparkling. Includes chemical balancing, skimming, and equipment checks.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Equipment Repair',
    description: 'Expert diagnosis and repair for all pool equipment, including pumps, filters, and heaters. Fast and efficient service.',
  },
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: 'Green Pool Recovery',
    description: 'Turn your green, murky pool back to crystal clear. Our intensive treatment process guarantees results.',
  },
];

const whyUsPoints = [
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    text: 'Certified & Insured Technicians',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    text: 'Eco-Friendly Chemical Options',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    text: '100% Satisfaction Guarantee',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    text: 'Transparent Pricing & Communication',
  },
];

const testimonials = [
  {
    avatar: 'https://i.pravatar.cc/150?img=1',
    name: 'Sarah L.',
    location: 'West Lake Hills, TX',
    text: 'AquaClear transformed our pool! Their team is professional, always on time, and our pool has never looked better. Highly recommend their weekly service.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=2',
    name: 'Mike R.',
    location: 'Tarrytown, Austin, TX',
    text: 'My pool pump died and they had it replaced within 24 hours. Incredible service and very knowledgeable technicians. Worth every penny for the peace of mind.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'Jennifer C.',
    location: 'Barton Creek, TX',
    text: 'I was skeptical about their "Green to Clean" service, but they delivered! My pool went from a swamp to pristine in just a few days. Absolutely amazing work.',
  },
];

function App() {
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      <Toaster />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Waves className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold tracking-tight">AquaClear</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button onClick={() => setQuoteModalOpen(true)}>Request a Quote</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center gap-4 p-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              ))}
              <Button onClick={() => { setQuoteModalOpen(true); setMenuOpen(false); }} className="w-full">Request a Quote</Button>
              <ThemeToggle />
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] w-full">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pristine luxury pool"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Experience Crystal Clear Perfection
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl">
              Austin's premier pool cleaning and maintenance service for discerning homeowners.
            </p>
            <Button size="lg" className="mt-8" onClick={() => setQuoteModalOpen(true)}>
              Get Your Free Quote Today
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Premium Services</h2>
              <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
                We offer a comprehensive range of services to keep your pool in pristine condition year-round.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col items-center text-center p-6">
                  <CardHeader className="p-0">
                    {service.icon}
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="bg-secondary py-16 sm:py-24">
          <div className="container grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why AquaClear?</h2>
              <p className="text-muted-foreground md:text-lg">
                When you choose AquaClear, you're not just getting a pool cleaner. You're investing in reliability, expertise, and unparalleled customer service.
              </p>
              <ul className="mt-6 space-y-4">
                {whyUsPoints.map((point) => (
                  <li key={point.text} className="flex items-center gap-3">
                    {point.icon}
                    <span className="font-medium">{point.text}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-6" onClick={() => setQuoteModalOpen(true)}>
                Learn More
              </Button>
            </div>
            <div className="h-[400px] w-full">
              <img
                src="https://images.pexels.com/photos/130879/pexels-photo-130879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Pool technician servicing a pool"
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-lg">
                We're proud to have earned the trust of homeowners across Austin.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mt-4 text-muted-foreground">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready for a Flawless Pool?</h2>
            <p className="mx-auto mt-4 max-w-[600px] text-primary-foreground/80 md:text-lg">
              Let us take the work out of pool ownership. Contact us today for a free, no-obligation quote.
            </p>
            <Button variant="secondary" size="lg" className="mt-8" onClick={() => setQuoteModalOpen(true)}>
              Request Your Free Quote
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2">
                <Waves className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold tracking-tight">AquaClear</span>
              </a>
              <p className="text-sm text-muted-foreground">Your trusted partner for pool perfection in Austin, TX.</p>
            </div>
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-2 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact Us</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>(512) 555-POOL</li>
                <li>contact@aquaclearpools.tx</li>
                <li>Austin, Texas</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AquaClear Pools. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Users,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Cog,
} from "lucide-react"
import { Logo } from "@/components/logo"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Acerca de
            </Link>
            <Link href="#competitions" className="text-sm font-medium hover:text-primary">
              Competencias
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:text-primary">
              Calendario
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary">
              Galería
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Registrarse</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Descubre el Futuro de la Robótica
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Únete a la Liga Tabasqueña de Robótica de Competencia. Compite, aprende y crea el futuro con nosotros.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    Inscríbete Ahora
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary/20">
                    Conoce Más
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <Cog className="absolute w-full h-full text-secondary opacity-90" style={{ left: "-10px" }} />
                  <Cog className="absolute w-full h-full text-primary opacity-90" style={{ left: "10px" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-lg font-semibold">LIGA TABASQUEÑA DE</div>
                      <div className="text-4xl font-bold">ROBÓTICA</div>
                      <div className="text-lg font-semibold">DE COMPETENCIA LTRC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Acerca de Nuestra Liga</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos una comunidad dedicada a fomentar la innovación y el aprendizaje a través de la robótica
                  competitiva en Tabasco.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Cog className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Competencias de Alto Nivel</h3>
                      <p className="text-muted-foreground">
                        Organizamos torneos regionales y nacionales con los más altos estándares.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/10 p-3">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Comunidad Colaborativa</h3>
                      <p className="text-muted-foreground">
                        Conectamos estudiantes, profesionales y entusiastas de la robótica.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Cog className="h-6 w-6 text-primary rotate-45" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Innovación Tecnológica</h3>
                      <p className="text-muted-foreground">
                        Promovemos el desarrollo de nuevas tecnologías y soluciones robóticas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2023.41.47-rP8QpJFU04v9ROV0OUZRpNZw0NqC4z.jpeg"
                width={550}
                height={400}
                alt="Logo de la Liga Tabasqueña de Robótica de Competencia"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center"
              />
            </div>
          </div>
        </section>

        <section id="competitions" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestras Competencias</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las diferentes categorías de competición disponibles en nuestra liga.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center bg-background rounded-lg p-6 shadow-lg border border-border">
                <div className="rounded-full bg-secondary p-4 mb-4">
                  <Cog className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sumo Robot</h3>
                <p className="text-center text-muted-foreground mb-4">
                  Robots que compiten para empujar al oponente fuera del ring.
                </p>
                <Button variant="outline" className="mt-auto">
                  Ver Detalles <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center bg-background rounded-lg p-6 shadow-lg border border-border">
                <div className="rounded-full bg-primary p-4 mb-4">
                  <Cog className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Seguidor de Línea</h3>
                <p className="text-center text-muted-foreground mb-4">
                  Robots que siguen un recorrido marcado en el menor tiempo posible.
                </p>
                <Button variant="outline" className="mt-auto">
                  Ver Detalles <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center bg-background rounded-lg p-6 shadow-lg border border-border">
                <div className="rounded-full bg-secondary p-4 mb-4">
                  <Cog className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Batalla de Robots</h3>
                <p className="text-center text-muted-foreground mb-4">
                  Competencia de robots de combate en una arena especial.
                </p>
                <Button variant="outline" className="mt-auto">
                  Ver Detalles <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Próximos Eventos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mantente al día con nuestro calendario de competencias y talleres.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <div className="flex flex-col md:flex-row gap-4 items-start border rounded-lg p-6">
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-4 text-center">
                  <span className="text-2xl font-bold text-primary">15</span>
                  <span className="block text-sm text-muted-foreground">Junio</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Campeonato Regional</h3>
                  <p className="text-muted-foreground mb-2">Centro de Convenciones, Villahermosa</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <Button className="md:ml-auto mt-4 md:mt-0">Inscribirse</Button>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-start border rounded-lg p-6">
                <div className="flex-shrink-0 rounded-lg bg-secondary/10 p-4 text-center">
                  <span className="text-2xl font-bold text-secondary">22</span>
                  <span className="block text-sm text-muted-foreground">Julio</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Taller de Programación</h3>
                  <p className="text-muted-foreground mb-2">Universidad Juárez Autónoma de Tabasco</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <Button className="md:ml-auto mt-4 md:mt-0">Inscribirse</Button>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-start border rounded-lg p-6">
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-4 text-center">
                  <span className="text-2xl font-bold text-primary">10</span>
                  <span className="block text-sm text-muted-foreground">Agosto</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Competencia Nacional</h3>
                  <p className="text-muted-foreground mb-2">Parque Tabasco, Villahermosa</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                </div>
                <Button className="md:ml-auto mt-4 md:mt-0">Inscribirse</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Galería</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Momentos destacados de nuestras competencias anteriores.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Robot+${i}`}
                    width={300}
                    height={300}
                    alt={`Imagen de competencia ${i}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contáctanos</h2>
                <p className="text-muted-foreground md:text-xl">
                  ¿Tienes preguntas o quieres formar parte de nuestra liga? Estamos aquí para ayudarte.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>info@ltrc.mx</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-secondary" />
                    <span>+52 993 123 4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Av. Universidad S/N, Zona de la Cultura, Villahermosa, Tabasco</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 bg-background p-6 rounded-lg shadow-lg border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Asunto
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu mensaje"
                  />
                </div>
                <Button className="w-full">Enviar Mensaje</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <Logo size="small" />
          <div className="flex items-center gap-4">
            <Link href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-secondary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="rounded-full bg-background p-2 text-muted-foreground hover:text-secondary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Liga Tabasqueña de Robótica de Competencia. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}


import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight, Check, Award, Users, Shield, Clock, Star } from 'lucide-react';
import { BUSINESS_INFO, FOUNDER_INFO } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'CPA Tulsa en Español | Servicios de Contabilidad e Impuestos',
  description: 'Servicios profesionales de CPA en español en Tulsa. Preparación de impuestos, contabilidad empresarial y planificación fiscal. Ex-gerente del IRS con más de 20 años de experiencia.',
  alternates: {
    canonical: '/es',
    languages: {
      'en': '/',
    },
  },
};

const featuredServices = [
  {
    title: 'Preparación de Impuestos',
    slug: 'preparacion-impuestos-tulsa',
    description: 'Servicios profesionales de preparación de impuestos para individuos y empresas',
    icon: '📊',
  },
  {
    title: 'Contabilidad Empresarial',
    slug: 'contabilidad-empresarial-tulsa',
    description: 'Servicios de contabilidad precisos para mantener sus finanzas organizadas',
    icon: '📚',
  },
  {
    title: 'Servicios de Nómina',
    slug: 'servicios-nomina-tulsa',
    description: 'Procesamiento completo de nómina y cumplimiento para empresas',
    icon: '💰',
  },
  {
    title: 'Consultoría de Negocios',
    slug: 'consultoria-negocios-tulsa',
    description: 'Asesoría estratégica para el crecimiento de su empresa',
    icon: '📈',
  },
  {
    title: 'Alivio Fiscal del IRS',
    slug: 'alivio-fiscal-irs-tulsa',
    description: 'Representación experta ante el IRS y resolución de problemas fiscales',
    icon: '🛡️',
  },
  {
    title: 'Planificación Financiera',
    slug: 'planificacion-financiera-tulsa',
    description: 'Estrategias personalizadas para alcanzar sus metas financieras',
    icon: '🎯',
  }
];

export default function SpanishHomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Español', url: '/es' },
  ]);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">Español</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-[#C8A46E]" />
              <span className="section-label">Servicios en Español</span>
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6">
              CPA en Tulsa con Servicios en Español
            </h1>
            <p className="text-[#6D727A] text-lg leading-relaxed mb-6">
              Dirigidos por un ex-gerente del IRS con maestría en impuestos empresariales,
              brindamos servicios excepcionales de impuestos y contabilidad con la experiencia
              que solo el conocimiento interno puede proporcionar.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Llamar {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="btn-outline inline-flex items-center gap-2"
              >
                Consulta Gratuita
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#6D727A]">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#C8A46E]" />
                Ex-Gerente del IRS
              </span>
              <span>•</span>
              <span>20+ Años de Experiencia</span>
              <span>•</span>
              <span>Maestría en Impuestos</span>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-[#0B1E3C] p-8">
              <h3 className="text-white font-['Cormorant_Garamond'] text-2xl mb-6">
                Estadísticas
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#C8A46E]" />
                  <div>
                    <p className="text-white font-medium">225+</p>
                    <p className="text-white/60 text-sm">Años de Experiencia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#C8A46E]" />
                  <div>
                    <p className="text-white font-medium">500+</p>
                    <p className="text-white/60 text-sm">Clientes Satisfechos</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#C8A46E]" />
                  <div>
                    <p className="text-white font-medium">100%</p>
                    <p className="text-white/60 text-sm">Éxito con el IRS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-[#C8A46E]" />
                  <div>
                    <p className="text-white font-medium">Bilingüe</p>
                    <p className="text-white/60 text-sm">Servicio Completo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-[7vw] py-12 bg-white">
        <span className="section-label">Servicios</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-4">
          Servicios Profesionales de CPA
        </h2>
        <p className="text-[#6D727A] text-base mb-8 max-w-2xl">
          Desde preparación de impuestos hasta consultoría empresarial, brindamos la experiencia que necesita para tener éxito
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <Link
              key={index}
              href={`/es/${service.slug}`}
              className="group bg-[#F4F1EC] p-6 border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all"
            >
              <span className="text-3xl mb-3 block">{service.icon}</span>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] group-hover:text-[#C8A46E] mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6D727A] text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="text-[#C8A46E] font-medium text-sm flex items-center gap-1">
                Más Información
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section with Founder */}
      <section className="px-[7vw] py-12">
        <div className="bg-white border border-[rgba(11,30,60,0.10)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/matt-klingeman.png"
                alt={FOUNDER_INFO.name}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold mb-2">{FOUNDER_INFO.name}</h3>
                <p className="text-white/80">CPA, Ex-Gerente del IRS</p>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <span className="section-label">Sobre Nosotros</span>
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.1] text-[#0B1E3C] mb-4">
                ¿Por Qué Elegir Klingeman CPAs?
              </h2>
              <p className="text-[#6D727A] mb-6">
                Con más de 20 años de experiencia en impuestos y contabilidad, incluyendo tiempo como
                gerente del IRS, fundé Klingeman CPAs para brindar a empresas e individuos la experiencia
                interna que necesitan para navegar situaciones fiscales complejas con confianza.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1E3C]">Experiencia Única del IRS</strong>
                    <p className="text-[#6D727A] text-sm">Conocimiento interno de procedimientos y estrategias del IRS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1E3C]">Servicio Bilingüe Completo</strong>
                    <p className="text-[#6D727A] text-sm">Atención personalizada en español para toda la comunidad hispana</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1E3C]">Resultados Comprobados</strong>
                    <p className="text-[#6D727A] text-sm">100% de éxito en negociaciones y resoluciones con el IRS</p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Comience Hoy
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Programe su consulta gratuita hoy y descubra cómo podemos ayudarlo a ahorrar dinero y alcanzar sus metas financieras.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Llamar: {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-[#0B1E3C]"
            >
              Solicitar Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

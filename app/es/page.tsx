import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEO, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import LeadMagnet from '@/components/LeadMagnet';
import TrustBadges from '@/components/TrustBadges';
import { BUSINESS_INFO, SERVICES, TRUST_BADGES, FOUNDER_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'CPA Tulsa en Español | Servicios de Contabilidad e Impuestos',
  description: 'Servicios profesionales de CPA en español en Tulsa. Preparación de impuestos, contabilidad empresarial y planificación fiscal. Ex-gerente del IRS con más de 20 años de experiencia.',
  canonical: '/es',
  hreflang: {
    en: '/',
    es: '/es'
  }
});

export default function SpanishHomePage() {
  const organizationSchema = generateOrganizationSchema();
  
  const featuredServices = [
    {
      title: 'Preparación de Impuestos',
      slug: 'preparacion-impuestos-tulsa',
      description: 'Servicios profesionales de preparación de impuestos para individuos y empresas en Tulsa',
      icon: '📊'
    },
    {
      title: 'Contabilidad Empresarial',
      slug: 'contabilidad-empresarial-tulsa',
      description: 'Servicios de contabilidad precisos para mantener sus finanzas organizadas',
      icon: '📚'
    },
    {
      title: 'Nómina',
      slug: 'servicios-nomina-tulsa',
      description: 'Procesamiento completo de nómina y cumplimiento para empresas de Tulsa',
      icon: '💰'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Servicios en Español
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  CPA Profesional en Tulsa con Servicios en Español
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Servicios completos de contabilidad e impuestos en español para la comunidad hispana 
                  de Tulsa. Con la experiencia única de un ex-gerente del IRS y más de 20 años de 
                  práctica profesional.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Llamar {BUSINESS_INFO.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition inline-flex items-center justify-center gap-2"
                  >
                    Consulta Gratuita
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ex-Gerente del IRS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>20+ Años de Experiencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Servicios Bilingües</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Programe Su Consulta Gratuita
                </h2>
                <ContactForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Servicios Profesionales de CPA en Español
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Ofrecemos servicios completos de contabilidad e impuestos en español, diseñados 
                para satisfacer las necesidades únicas de la comunidad hispana de Tulsa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 text-center"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/es/${service.slug}`}
                    className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Más Información
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-4">
                También ofrecemos servicios de auditoría, formación empresarial, estados financieros, 
                planificación patrimonial y mucho más.
              </p>
              <Link
                href="/services"
                className="text-blue-700 font-semibold hover:underline"
              >
                Ver todos nuestros servicios →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir Klingeman CPAs?
              </h2>
              <p className="text-xl text-gray-700">
                Nuestra experiencia única y enfoque personalizado nos distingue de otros CPAs en Tulsa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Experiencia Única del IRS
                </h3>
                <p className="text-gray-700">
                  Nuestro fundador es ex-gerente del IRS, proporcionando perspectivas invaluables 
                  sobre cumplimiento tributario, defensa de auditorías y planificación estratégica 
                  que otras firmas simplemente no pueden igualar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Servicios Completamente Bilingües
                </h3>
                <p className="text-gray-700">
                  Entendemos las necesidades únicas de la comunidad hispana y ofrecemos todos 
                  nuestros servicios en español, desde consultas hasta preparación de documentos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Conocimiento Local
                </h3>
                <p className="text-gray-700">
                  Con décadas de experiencia sirviendo a Tulsa, conocemos las regulaciones locales, 
                  incentivos fiscales y oportunidades específicas de Oklahoma.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Atención Personalizada
                </h3>
                <p className="text-gray-700">
                  A diferencia de las grandes firmas corporativas, proporcionamos atención 
                  personalizada y construimos relaciones a largo plazo con cada cliente.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <TrustBadges showAll />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sobre Matt Klingeman, CPA
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-blue-100 w-48 h-48 rounded-lg mx-auto mb-8 flex items-center justify-center">
                  <span className="text-6xl">👨‍💼</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {FOUNDER_INFO.name}, {FOUNDER_INFO.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Matt Klingeman posee una Maestría en Tributación Empresarial y aporta experiencia 
                  única como ex-gerente del IRS con más de 20 años de experiencia como CPA. Su 
                  perspectiva desde ambos lados del sistema tributario proporciona a los clientes 
                  ventajas incomparables en planificación fiscal y representación.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Maestría en Tributación Empresarial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Ex-Gerente del IRS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">20+ años de experiencia como CPA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Especialista en pequeñas empresas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sirviendo a Toda el Área de Tulsa
              </h2>
              <p className="text-xl text-gray-700">
                Nuestra oficina en {BUSINESS_INFO.address.street} está convenientemente ubicada 
                para servir a clientes en toda el área metropolitana de Tulsa.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Tulsa</h3>
                <p className="text-sm text-gray-600">Centro de operaciones</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Broken Arrow</h3>
                <p className="text-sm text-gray-600">15 minutos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Bixby</h3>
                <p className="text-sm text-gray-600">20 minutos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Owasso</h3>
                <p className="text-sm text-gray-600">20 minutos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Jenks</h3>
                <p className="text-sm text-gray-600">15 minutos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Sand Springs</h3>
                <p className="text-sm text-gray-600">10 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Recursos Gratuitos
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Acceda a nuestros recursos gratuitos en español para ayudarle con la planificación 
                  fiscal y el cumplimiento empresarial.
                </p>
                <LeadMagnet />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-blue-700 hover:underline">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-blue-700 hover:underline">
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-700">
                        {BUSINESS_INFO.address.street}<br />
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Horarios</p>
                      <div className="text-gray-700 text-sm">
                        <p>Lunes - Viernes: {BUSINESS_INFO.hours.weekdays}</p>
                        <p>Sábado: {BUSINESS_INFO.hours.saturday}</p>
                        <p>Domingo: {BUSINESS_INFO.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para trabajar con CPAs experimentados?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Programe su consulta gratuita hoy y descubra cómo nuestra experiencia del IRS puede beneficiarle.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar {BUSINESS_INFO.phone}
            </a>
            
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Programar Consulta
            </Link>
          </div>

          <p className="mt-6 text-sm opacity-75">
            Ex-Gerente del IRS • Más de 20 años de experiencia • Sirviendo a toda el área de Tulsa
          </p>
        </div>
      </section>
    </>
  );
}
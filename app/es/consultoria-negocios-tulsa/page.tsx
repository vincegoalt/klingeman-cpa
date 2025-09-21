import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import { BUSINESS_INFO, FOUNDER_INFO } from '@/lib/constants';
import { getServiceIcon } from '@/lib/icons';

export const metadata: Metadata = generateSEO({
  title: 'Consultoría de Negocios Tulsa | Business Consulting en Español',
  description: 'Consultoría empresarial experta en español para hacer crecer su negocio en Tulsa. Estrategias personalizadas y soluciones financieras efectivas.',
  canonical: '/es/consultoria-negocios-tulsa',
  hreflang: {
    en: '/services/business-consulting-tulsa',
    es: '/es/consultoria-negocios-tulsa'
  },
  locale: 'es_ES'
});

export default function ConsultoriaEmpresarialPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Consultoría de Negocios en Español',
    description: 'Asesoramiento estratégico y consultoría financiera para empresas hispanas en Tulsa.',
    url: '/es/consultoria-negocios-tulsa'
  });

  const faqs = [
    {
      question: '¿Qué incluye su consultoría de negocios?',
      answer: 'Nuestra consultoría incluye análisis financiero, planificación estratégica, optimización de procesos, mejora de flujo de efectivo, estrategias de crecimiento y reducción de costos operativos.'
    },
    {
      question: '¿Cómo pueden ayudar a mi negocio a crecer?',
      answer: 'Desarrollamos estrategias personalizadas basadas en análisis profundo de sus finanzas, mercado y competencia. Identificamos oportunidades de crecimiento y creamos planes de acción específicos con métricas claras.'
    },
    {
      question: '¿Trabajan con negocios nuevos?',
      answer: 'Sí, ayudamos tanto a startups como a empresas establecidas. Para negocios nuevos, ofrecemos planificación de negocios, proyecciones financieras, estructuración legal y estrategias de lanzamiento.'
    },
    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'Los resultados varían según el proyecto. Algunas mejoras operativas pueden verse en semanas, mientras que las estrategias de crecimiento pueden tomar 3-6 meses. Proporcionamos métricas para medir el progreso.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/es' },
    { name: 'Servicios', url: '/es' },
    { name: 'Consultoría de Negocios', url: '/es/consultoria-negocios-tulsa' }
  ]);

  const benefits = [
    'Análisis financiero profundo y estratégico',
    'Planes de negocios y proyecciones financieras',
    'Optimización de operaciones y procesos',
    'Estrategias de crecimiento personalizado',
    'Mejora del flujo de efectivo',
    'Reducción de costos operativos'
  ];

  const process = [
    {
      step: 'Diagnóstico',
      description: 'Evaluamos su situación actual y objetivos'
    },
    {
      step: 'Estrategia',
      description: 'Desarrollamos un plan personalizado de acción'
    },
    {
      step: 'Implementación',
      description: 'Ejecutamos las estrategias con su equipo'
    },
    {
      step: 'Monitoreo',
      description: 'Medimos resultados y ajustamos según necesidad'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section with Image */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/es" className="text-blue-700 hover:underline">
                ← Volver a Inicio
              </Link>
            </div>

            {/* Hero Image and Title */}
            <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=400&fit=crop"
                alt="Consultoría de Negocios"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent md:from-black/70 md:via-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-gray-900 md:text-white">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/60 md:bg-white/20 backdrop-blur-sm rounded-full">
                      <div className="text-gray-900 md:text-white">{getServiceIcon('consulting', 'w-7 h-7')}</div>
                    </div>
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold text-sm">
                      Servicio Profesional
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Consultoría de Negocios en Español
                  </h1>
                  <p className="text-xl text-gray-700 md:text-gray-100 leading-relaxed max-w-3xl">
                    Estrategias personalizadas y asesoramiento experto para hacer crecer su negocio y maximizar su rentabilidad
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg border border-blue-200"
              >
                Consulta Gratuita
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforme Su Negocio con Consultoría Experta
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  En Klingeman CPAs, combinamos más de 20 años de experiencia con un profundo conocimiento del 
                  mercado local de Tulsa para ayudar a empresarios hispanos a alcanzar sus metas de negocio. 
                  Nuestra consultoría va más allá de los números, enfocándose en soluciones prácticas y resultados medibles.
                </p>
                
                <p className="text-lg mb-6">
                  Ya sea que necesite mejorar su flujo de efectivo, expandir operaciones o restructurar su negocio, 
                  nuestro equipo bilingüe le proporciona las estrategias y herramientas necesarias para el éxito sostenible.
                </p>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Áreas de Consultoría Especializada
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Nuestro Proceso de Consultoría
            </h2>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {process.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white relative z-10">
                      <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.step}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Preguntas Frecuentes sobre Consultoría
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="text-blue-600 flex-shrink-0">P:</span>
                    {faq.question}
                  </h3>
                  <div className="pl-8">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="text-blue-600 font-semibold">R:</span> {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comience Su Transformación Empresarial
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Descubra cómo nuestra consultoría puede llevar su negocio al siguiente nivel.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
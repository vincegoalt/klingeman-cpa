import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import { BUSINESS_INFO, FOUNDER_INFO } from '@/lib/constants';
import { getServiceIcon } from '@/lib/icons';

export const metadata: Metadata = generateSEO({
  title: 'Contabilidad Empresarial Tulsa | Servicios de Bookkeeping en Español',
  description: 'Servicios profesionales de contabilidad y bookkeeping en español para negocios en Tulsa. Mantenga sus finanzas organizadas con expertos CPAs.',
  canonical: '/es/contabilidad-empresarial-tulsa',
  hreflang: {
    en: '/services/bookkeeping-tulsa',
    es: '/es/contabilidad-empresarial-tulsa'
  },
  locale: 'es_ES'
});

export default function ContabilidadEmpresarialPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Contabilidad Empresarial en Español',
    description: 'Servicios completos de contabilidad y bookkeeping para empresas hispanas en Tulsa.',
    url: '/es/contabilidad-empresarial-tulsa'
  });

  const faqs = [
    {
      question: '¿Por qué es importante la contabilidad profesional para mi negocio?',
      answer: 'La contabilidad profesional le proporciona información financiera precisa para tomar decisiones comerciales informadas, garantiza el cumplimiento fiscal y le ahorra tiempo para enfocarse en hacer crecer su negocio.'
    },
    {
      question: '¿Con qué frecuencia debo actualizar mis libros contables?',
      answer: 'Recomendamos actualizaciones mensuales como mínimo. Para empresas con alto volumen de transacciones, la contabilidad semanal o incluso diaria puede ser más apropiada para mantener información financiera actualizada.'
    },
    {
      question: '¿Qué software de contabilidad utilizan?',
      answer: 'Trabajamos con QuickBooks, Xero, y otros sistemas populares. También podemos adaptarnos a su software existente o recomendar la mejor solución para sus necesidades específicas.'
    },
    {
      question: '¿Pueden ayudar con la contabilidad atrasada?',
      answer: 'Sí, nos especializamos en poner al día libros atrasados. Podemos reconstruir sus registros financieros y establecer sistemas para mantenerlos actualizados en el futuro.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/es' },
    { name: 'Servicios', url: '/es' },
    { name: 'Contabilidad Empresarial', url: '/es/contabilidad-empresarial-tulsa' }
  ]);

  const benefits = [
    'Estados financieros mensuales precisos',
    'Reconciliación bancaria completa',
    'Seguimiento de cuentas por cobrar y pagar',
    'Categorización de gastos para deducciones',
    'Reportes financieros personalizados',
    'Cumplimiento con regulaciones fiscales'
  ];

  const process = [
    {
      step: 'Consulta Inicial',
      description: 'Evaluamos sus necesidades contables y sistemas actuales'
    },
    {
      step: 'Configuración',
      description: 'Establecemos o mejoramos su sistema de contabilidad'
    },
    {
      step: 'Procesamiento',
      description: 'Mantenemos sus libros actualizados mensualmente'
    },
    {
      step: 'Reportes',
      description: 'Proporcionamos informes financieros claros y accionables'
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
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=400&fit=crop"
                alt="Contabilidad Empresarial"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent md:from-black/70 md:via-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-gray-900 md:text-white">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/60 md:bg-white/20 backdrop-blur-sm rounded-full">
                      <div className="text-gray-900 md:text-white">{getServiceIcon('bookkeeping', 'w-7 h-7')}</div>
                    </div>
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold text-sm">
                      Servicio Profesional
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Contabilidad Empresarial en Español
                  </h1>
                  <p className="text-xl text-gray-700 md:text-gray-100 leading-relaxed max-w-3xl">
                    Servicios completos de bookkeeping y contabilidad para mantener sus finanzas organizadas y su negocio en cumplimiento
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
                Contabilidad Profesional para Su Éxito Empresarial
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  En Klingeman CPAs, entendemos que la contabilidad precisa es fundamental para el éxito de su negocio. 
                  Nuestros servicios de bookkeeping en español están diseñados específicamente para empresarios hispanos 
                  en Tulsa, combinando experiencia técnica con comprensión cultural.
                </p>
                
                <p className="text-lg mb-6">
                  Con más de 20 años de experiencia y conocimiento único del IRS, le ayudamos a mantener sus libros 
                  en orden, maximizar deducciones fiscales y tomar decisiones financieras informadas para hacer crecer su negocio.
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
              Beneficios de Nuestra Contabilidad Profesional
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
              Nuestro Proceso Simple
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
              Preguntas Frecuentes
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
              ¿Listo para Organizar Sus Finanzas?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Programe su consulta gratuita hoy y descubra cómo nuestra contabilidad profesional puede transformar su negocio.
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
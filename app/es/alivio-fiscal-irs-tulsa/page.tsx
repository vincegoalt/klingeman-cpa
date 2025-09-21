import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import { BUSINESS_INFO, FOUNDER_INFO } from '@/lib/constants';
import { getServiceIcon } from '@/lib/icons';

export const metadata: Metadata = generateSEO({
  title: 'Alivio Fiscal IRS Tulsa | Resolución de Deudas Fiscales en Español',
  description: 'Expertos en resolución de problemas con el IRS. Negociación de deudas, planes de pago y representación fiscal en español para la comunidad hispana en Tulsa.',
  canonical: '/es/alivio-fiscal-irs-tulsa',
  hreflang: {
    en: '/services/irs-tax-relief-tulsa',
    es: '/es/alivio-fiscal-irs-tulsa'
  },
  locale: 'es_ES'
});

export default function AlivioFiscalIRSPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Alivio Fiscal del IRS en Español',
    description: 'Servicios especializados de resolución de deudas y problemas con el IRS para la comunidad hispana en Tulsa.',
    url: '/es/alivio-fiscal-irs-tulsa'
  });

  const faqs = [
    {
      question: '¿Qué opciones tengo si debo dinero al IRS?',
      answer: 'Existen varias opciones: planes de pago a plazos, ofertas de compromiso (OIC), estado de no cobrable actualmente, y reducción de penalidades. Como ex-gerente del IRS, conocemos las mejores estrategias para su situación específica.'
    },
    {
      question: '¿Pueden detener embargos y gravámenes del IRS?',
      answer: 'Sí, podemos negociar con el IRS para liberar embargos bancarios, detener embargos de salarios y trabajar para liberar gravámenes fiscales. La acción rápida es crucial para proteger sus activos.'
    },
    {
      question: '¿Cuánto pueden reducir mi deuda con el IRS?',
      answer: 'Cada caso es único. A través de ofertas de compromiso, algunos clientes han resuelto deudas por centavos por dólar. Evaluaremos su situación financiera para determinar la mejor estrategia de reducción.'
    },
    {
      question: '¿Qué pasa si no he presentado declaraciones en años?',
      answer: 'Podemos ayudarle a ponerse al día con todas las declaraciones atrasadas y negociar penalidades reducidas. Es mejor actuar voluntariamente antes de que el IRS tome acción forzosa.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/es' },
    { name: 'Servicios', url: '/es' },
    { name: 'Alivio Fiscal IRS', url: '/es/alivio-fiscal-irs-tulsa' }
  ]);

  const benefits = [
    'Negociación directa con el IRS',
    'Planes de pago personalizados',
    'Ofertas de compromiso (OIC)',
    'Liberación de embargos y gravámenes',
    'Reducción de penalidades e intereses',
    'Representación en auditorías'
  ];

  const process = [
    {
      step: 'Evaluación',
      description: 'Analizamos su situación fiscal completa'
    },
    {
      step: 'Estrategia',
      description: 'Diseñamos la mejor solución para su caso'
    },
    {
      step: 'Negociación',
      description: 'Representamos sus intereses ante el IRS'
    },
    {
      step: 'Resolución',
      description: 'Implementamos el acuerdo y monitoreamos cumplimiento'
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
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=400&fit=crop"
                alt="Alivio Fiscal IRS"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent md:from-black/70 md:via-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-gray-900 md:text-white">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/60 md:bg-white/20 backdrop-blur-sm rounded-full">
                      <div className="text-gray-900 md:text-white">{getServiceIcon('irs-relief', 'w-7 h-7')}</div>
                    </div>
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold text-sm">
                      Ex-Gerente del IRS
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Alivio Fiscal del IRS en Español
                  </h1>
                  <p className="text-xl text-gray-700 md:text-gray-100 leading-relaxed max-w-3xl">
                    Resuelva sus problemas con el IRS con la ayuda de un ex-gerente del IRS que entiende el sistema desde adentro
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
                Consulta Urgente Gratuita
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Notice Section */}
      <section className="py-8 bg-red-50 border-y-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2">¿Tiene Problemas con el IRS? No Espere Más</h3>
                <p className="text-red-800">
                  Los problemas con el IRS empeoran con el tiempo. Intereses y penalidades se acumulan diariamente. 
                  <strong> Actúe ahora antes de que el IRS tome medidas más severas.</strong> Con nuestra experiencia como 
                  ex-gerente del IRS, sabemos cómo proteger sus derechos y resolver su situación rápidamente.
                </p>
              </div>
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
                Experiencia Única del IRS a Su Servicio
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Como ex-gerente del IRS, {FOUNDER_INFO.name} tiene conocimiento único de cómo funciona el sistema 
                  desde adentro. Esta experiencia invaluable nos permite negociar efectivamente y encontrar 
                  soluciones que otros no pueden lograr.
                </p>
                
                <p className="text-lg mb-6">
                  No importa qué tan complicada sea su situación fiscal - deudas atrasadas, auditorías, embargos, 
                  o años de declaraciones sin presentar - tenemos la experiencia y el conocimiento para ayudarle 
                  a resolver sus problemas con el IRS de manera favorable.
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
              Soluciones Completas para Problemas con el IRS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              Proceso de Resolución con el IRS
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
              Preguntas Frecuentes sobre Problemas con el IRS
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
              No Enfrente al IRS Solo
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Con un ex-gerente del IRS de su lado, tiene la mejor defensa posible. Actúe ahora para proteger sus derechos y resolver su situación.
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
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import { BUSINESS_INFO, FOUNDER_INFO } from '@/lib/constants';
import { getServiceIcon } from '@/lib/icons';

export const metadata: Metadata = generateSEO({
  title: 'Planificación Financiera Tulsa | Asesoría Financiera en Español',
  description: 'Servicios de planificación financiera integral en español para individuos y empresas en Tulsa. Retiro, inversiones, y estrategias fiscales personalizadas.',
  canonical: '/es/planificacion-financiera-tulsa',
  hreflang: {
    en: '/services/financial-planning-tulsa',
    es: '/es/planificacion-financiera-tulsa'
  },
  locale: 'es_ES'
});

export default function PlanificacionFinancieraPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Planificación Financiera en Español',
    description: 'Asesoría financiera integral y planificación de patrimonio para la comunidad hispana en Tulsa.',
    url: '/es/planificacion-financiera-tulsa'
  });

  const faqs = [
    {
      question: '¿Qué incluye la planificación financiera integral?',
      answer: 'Nuestra planificación incluye análisis de presupuesto, estrategias de ahorro e inversión, planificación de retiro, protección de activos, planificación fiscal, y estrategias de patrimonio y sucesión.'
    },
    {
      question: '¿Necesito mucho dinero para empezar a planificar?',
      answer: 'No, la planificación financiera es importante en cualquier etapa. Trabajamos con clientes de todos los niveles económicos, desde quienes están comenzando a ahorrar hasta aquellos con patrimonios significativos.'
    },
    {
      question: '¿Cómo me ayudan con la planificación de retiro?',
      answer: 'Evaluamos sus metas de retiro, calculamos cuánto necesita ahorrar, optimizamos cuentas 401(k) e IRA, y creamos estrategias de distribución que minimizan impuestos durante el retiro.'
    },
    {
      question: '¿Ofrecen asesoría de inversiones?',
      answer: 'Sí, proporcionamos orientación sobre estrategias de inversión alineadas con sus objetivos, tolerancia al riesgo y horizonte temporal. También ayudamos a optimizar la eficiencia fiscal de sus inversiones.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/es' },
    { name: 'Servicios', url: '/es' },
    { name: 'Planificación Financiera', url: '/es/planificacion-financiera-tulsa' }
  ]);

  const benefits = [
    'Plan financiero personalizado integral',
    'Estrategias de ahorro e inversión',
    'Planificación de retiro y 401(k)',
    'Minimización de impuestos legalmente',
    'Protección de activos y patrimonio',
    'Planificación de educación universitaria'
  ];

  const process = [
    {
      step: 'Descubrimiento',
      description: 'Entendemos sus metas y situación actual'
    },
    {
      step: 'Análisis',
      description: 'Evaluamos oportunidades y riesgos'
    },
    {
      step: 'Plan',
      description: 'Creamos su estrategia financiera personalizada'
    },
    {
      step: 'Implementación',
      description: 'Ejecutamos y monitoreamos su plan'
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
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=400&fit=crop"
                alt="Planificación Financiera"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent md:from-black/70 md:via-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-gray-900 md:text-white">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/60 md:bg-white/20 backdrop-blur-sm rounded-full">
                      <div className="text-gray-900 md:text-white">{getServiceIcon('financial-planning', 'w-7 h-7')}</div>
                    </div>
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold text-sm">
                      Servicio Profesional
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Planificación Financiera en Español
                  </h1>
                  <p className="text-xl text-gray-700 md:text-gray-100 leading-relaxed max-w-3xl">
                    Construya un futuro financiero sólido con estrategias personalizadas para alcanzar sus metas de vida y retiro
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
                Su Futuro Financiero Comienza Hoy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  La planificación financiera no es solo para los ricos - es para cualquier persona que quiera 
                  tomar control de su futuro. En Klingeman CPAs, creemos que cada familia hispana en Tulsa 
                  merece acceso a asesoría financiera profesional en su idioma.
                </p>
                
                <p className="text-lg mb-6">
                  Ya sea que esté ahorrando para la educación de sus hijos, planificando su retiro, o 
                  construyendo riqueza generacional, nuestro equipo bilingüe le guiará paso a paso hacia 
                  la seguridad financiera que su familia merece.
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
              Servicios de Planificación Integral
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life Stages Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Planificación para Cada Etapa de la Vida
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comenzando (20-35 años)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Establecer presupuesto y ahorro</li>
                  <li>• Construir crédito sólido</li>
                  <li>• Iniciar cuentas de retiro</li>
                  <li>• Planificar compra de casa</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creciendo (35-55 años)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Educación universitaria hijos</li>
                  <li>• Maximizar ahorros de retiro</li>
                  <li>• Protección de activos</li>
                  <li>• Planificación fiscal avanzada</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retiro (55+ años)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Estrategias de distribución</li>
                  <li>• Minimizar impuestos en retiro</li>
                  <li>• Planificación de patrimonio</li>
                  <li>• Protección contra inflación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Nuestro Proceso de Planificación
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
              Tome Control de Su Futuro Financiero
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Comience hoy con una consulta gratuita y descubra cómo podemos ayudarle a alcanzar sus metas financieras.
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
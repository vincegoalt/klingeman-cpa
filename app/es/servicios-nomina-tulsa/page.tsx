import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import { BUSINESS_INFO, FOUNDER_INFO } from '@/lib/constants';
import { getServiceIcon } from '@/lib/icons';

export const metadata: Metadata = generateSEO({
  title: 'Servicios de Nómina Tulsa | Payroll Processing en Español',
  description: 'Servicios completos de nómina y payroll en español para empresas en Tulsa. Procesamiento preciso, cumplimiento fiscal y pagos puntuales.',
  canonical: '/es/servicios-nomina-tulsa',
  hreflang: {
    en: '/services/payroll-tulsa',
    es: '/es/servicios-nomina-tulsa'
  }
});

export default function ServiciosNominaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Servicios de Nómina en Español',
    description: 'Procesamiento profesional de nómina y cumplimiento fiscal para empresas hispanas en Tulsa.',
    url: '/es/servicios-nomina-tulsa'
  });

  const faqs = [
    {
      question: '¿Qué incluyen sus servicios de nómina?',
      answer: 'Nuestros servicios incluyen procesamiento de cheques, depósitos directos, cálculo de impuestos, presentación de formularios fiscales, W-2s y 1099s anuales, y cumplimiento con todas las regulaciones federales y estatales.'
    },
    {
      question: '¿Con qué frecuencia pueden procesar la nómina?',
      answer: 'Procesamos nómina semanal, quincenal, bisemanal o mensual según sus necesidades. También manejamos bonos especiales y pagos adicionales cuando sea necesario.'
    },
    {
      question: '¿Manejan los impuestos de nómina?',
      answer: 'Sí, calculamos, retiramos y depositamos todos los impuestos de nómina federales, estatales y locales. También presentamos todos los formularios fiscales requeridos a tiempo para evitar multas.'
    },
    {
      question: '¿Qué pasa si tengo empleados nuevos?',
      answer: 'Manejamos todo el proceso de incorporación de nuevos empleados, incluyendo la verificación de elegibilidad de empleo, configuración de retenciones fiscales y registro en sistemas estatales.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/es' },
    { name: 'Servicios', url: '/es' },
    { name: 'Servicios de Nómina', url: '/es/servicios-nomina-tulsa' }
  ]);

  const benefits = [
    'Cálculo preciso de salarios y deducciones',
    'Depósito directo automatizado',
    'Cumplimiento con leyes laborales',
    'Reportes de nómina detallados',
    'Manejo de beneficios y vacaciones',
    'Soporte en auditorías laborales'
  ];

  const process = [
    {
      step: 'Configuración',
      description: 'Establecemos su sistema de nómina personalizado'
    },
    {
      step: 'Procesamiento',
      description: 'Calculamos salarios y deducciones cada período'
    },
    {
      step: 'Distribución',
      description: 'Emitimos pagos por depósito directo o cheque'
    },
    {
      step: 'Cumplimiento',
      description: 'Presentamos todos los formularios fiscales requeridos'
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=400&fit=crop"
                alt="Servicios de Nómina"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent md:from-black/70 md:via-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-gray-900 md:text-white">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/60 md:bg-white/20 backdrop-blur-sm rounded-full">
                      <div className="text-gray-900 md:text-white">{getServiceIcon('payroll', 'w-7 h-7')}</div>
                    </div>
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold text-sm">
                      Servicio Profesional
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Servicios de Nómina en Español
                  </h1>
                  <p className="text-xl text-gray-700 md:text-gray-100 leading-relaxed max-w-3xl">
                    Procesamiento de nómina confiable y cumplimiento fiscal completo para que pueda enfocarse en hacer crecer su negocio
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
                Nómina Sin Complicaciones para Su Empresa
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  El procesamiento de nómina puede ser complejo y consumir mucho tiempo. En Klingeman CPAs, 
                  simplificamos todo el proceso con servicios completos en español que garantizan que sus 
                  empleados sean pagados correctamente y a tiempo, mientras mantiene el cumplimiento total con las leyes fiscales.
                </p>
                
                <p className="text-lg mb-6">
                  Nuestra experiencia como ex-gerente del IRS nos da una comprensión única de los requisitos 
                  de cumplimiento, ayudándole a evitar errores costosos y multas mientras optimiza su proceso de nómina.
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
              ¿Por Qué Elegir Nuestros Servicios de Nómina?
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
              Proceso Simple de Nómina
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
              Preguntas Frecuentes sobre Nómina
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
              Simplifique Su Nómina Hoy
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Deje que nuestros expertos manejen su nómina mientras usted se enfoca en su negocio.
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
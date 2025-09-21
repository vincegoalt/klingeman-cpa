import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEO, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Preparación de Impuestos Tulsa | Servicios Profesionales en Español',
  description: 'Servicios expertos de preparación de impuestos en español en Tulsa. Ex-gerente del IRS garantiza máximas deducciones y cumplimiento completo.',
  canonical: '/es/preparacion-impuestos-tulsa',
  hreflang: {
    en: '/services/tax-preparation-tulsa',
    es: '/es/preparacion-impuestos-tulsa'
  },
  locale: 'es_ES'
});

export default function PreparacionImpuestosTulsaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Preparación de Impuestos en Español',
    description: 'Servicios profesionales de preparación de impuestos en español con experiencia del IRS.',
    url: '/es/preparacion-impuestos-tulsa'
  });

  const faqs = [
    {
      question: '¿Cuánto cuesta la preparación de impuestos en Tulsa?',
      answer: 'Nuestras tarifas de preparación de impuestos comienzan en $250 para declaraciones individuales simples. Las declaraciones comerciales y situaciones complejas se cotizan según el alcance. Proporcionamos precios transparentes durante su consulta gratuita.'
    },
    {
      question: '¿Qué documentos necesito para la preparación de impuestos?',
      answer: 'Los documentos comunes incluyen W-2, 1099, estados de interés hipotecario, recibos de donaciones caritativas y registros de gastos comerciales. Proporcionamos una lista completa cuando programe su cita.'
    },
    {
      question: '¿Pueden ayudar con impuestos atrasados?',
      answer: 'Sí, nos especializamos en resolver problemas de impuestos atrasados. Nuestra experiencia como ex-gerente del IRS es invaluable para negociar planes de pago, ofertas de compromiso y reducción de multas.'
    },
    {
      question: '¿Ofrecen servicios en español?',
      answer: 'Sí, ofrecemos todos nuestros servicios completamente en español. Entendemos las necesidades únicas de la comunidad hispana y proporcionamos comunicación clara en su idioma nativo.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/es' },
    { name: 'Preparación de Impuestos', url: '/es/preparacion-impuestos-tulsa' }
  ]);

  const benefits = [
    'Máximas deducciones legales identificadas',
    'Perspectiva del ex-IRS para declaraciones a prueba de auditorías',
    'Presentación electrónica para reembolsos más rápidos',
    'Planificación fiscal incluida durante todo el año',
    'Representación en caso de auditoría'
  ];

  const process = [
    { step: 'Consulta', description: 'Consulta inicial gratuita para entender su situación fiscal' },
    { step: 'Revisión de Documentos', description: 'Revisión integral de todos los documentos fiscales y recibos' },
    { step: 'Preparación', description: 'Preparación experta maximizando deducciones y créditos' },
    { step: 'Revisión', description: 'Revisión detallada con usted antes de presentar' },
    { step: 'Presentación', description: 'Presentación electrónica y soporte de seguimiento' }
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

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/es" className="text-blue-700 hover:underline">
                ← Volver al Inicio
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Servicios Profesionales de Preparación de Impuestos en Tulsa
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Preparación experta de impuestos respaldada por la experiencia de ex-gerencia del IRS. 
                Maximizamos sus deducciones mientras garantizamos el cumplimiento completo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Comenzar Hoy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Descripción General
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Nuestros servicios de preparación de impuestos combinan experiencia profunda con atención 
              personalizada. Dirigidos por un ex-gerente del IRS, entendemos la ley fiscal desde ambos 
              lados y usamos este conocimiento a su favor. Manejamos todo, desde declaraciones individuales 
              simples hasta presentaciones comerciales complejas, asegurando que pague solo lo que debe 
              y ni un centavo más.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Beneficios Clave
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-12">
              <p className="text-lg font-semibold text-gray-900 text-center">
                Con experiencia como ex-gerente del IRS y más de 20 años como CPAs practicantes, 
                proporcionamos servicios de preparación de impuestos que protegen sus intereses 
                y maximizan su éxito financiero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nuestro Proceso
            </h2>
            
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                  <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.step}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comience con Servicios de Preparación de Impuestos
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Programe Su Consulta</h3>
                <ContactForm compact />
              </div>

              <div className="space-y-6">
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Información de Contacto</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-blue-700">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-blue-700">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>
                        {BUSINESS_INFO.address.street}<br />
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Servicios Relacionados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/bookkeeping-tulsa"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group"
              >
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">
                  Contabilidad
                </h3>
                <p className="text-sm text-gray-600">Servicios precisos de contabilidad para mantener sus finanzas organizadas</p>
              </Link>

              <Link
                href="/services/tax-credits-tulsa"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group"
              >
                <div className="text-3xl mb-3">💳</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">
                  Créditos Fiscales
                </h3>
                <p className="text-sm text-gray-600">Maximice sus ahorros fiscales con créditos y deducciones disponibles</p>
              </Link>

              <Link
                href="/services/audit-assurance-tulsa"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group"
              >
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">
                  Auditoría y Aseguramiento
                </h3>
                <p className="text-sm text-gray-600">Servicios profesionales de auditoría con experiencia del IRS</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para comenzar con la preparación de impuestos?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contacte a nuestros CPAs experimentados hoy para una consulta gratuita.
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
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, ChevronRight, ArrowLeft, Check, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/schemas';

type Props = {
  params: Promise<{ slug: string }>;
};

const spanishServices: Record<string, {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  'preparacion-impuestos-tulsa': {
    title: 'Preparación de Impuestos',
    description: 'Preparación experta de impuestos respaldada por la experiencia de ex-gerencia del IRS. Maximizamos sus deducciones mientras garantizamos el cumplimiento completo.',
    icon: '📊',
    benefits: [
      'Máximas deducciones legales identificadas',
      'Perspectiva del ex-IRS para declaraciones a prueba de auditorías',
      'Presentación electrónica para reembolsos más rápidos',
      'Planificación fiscal incluida durante todo el año',
      'Representación en caso de auditoría'
    ],
    process: [
      { step: 'Consulta', description: 'Consulta inicial gratuita para entender su situación fiscal' },
      { step: 'Revisión de Documentos', description: 'Revisión integral de todos los documentos fiscales y recibos' },
      { step: 'Preparación', description: 'Preparación experta maximizando deducciones y créditos' },
      { step: 'Revisión', description: 'Revisión detallada con usted antes de presentar' },
      { step: 'Presentación', description: 'Presentación electrónica y soporte de seguimiento' }
    ],
    faqs: [
      { question: '¿Cuánto cuesta la preparación de impuestos en Tulsa?', answer: 'Nuestras tarifas de preparación de impuestos comienzan en $250 para declaraciones individuales simples. Las declaraciones comerciales y situaciones complejas se cotizan según el alcance.' },
      { question: '¿Qué documentos necesito para la preparación de impuestos?', answer: 'Los documentos comunes incluyen W-2, 1099, estados de interés hipotecario, recibos de donaciones caritativas y registros de gastos comerciales.' },
      { question: '¿Pueden ayudar con impuestos atrasados?', answer: 'Sí, nos especializamos en resolver problemas de impuestos atrasados. Nuestra experiencia como ex-gerente del IRS es invaluable para negociar planes de pago.' },
      { question: '¿Ofrecen servicios en español?', answer: 'Sí, ofrecemos todos nuestros servicios completamente en español. Entendemos las necesidades únicas de la comunidad hispana.' }
    ]
  },
  'contabilidad-empresarial-tulsa': {
    title: 'Contabilidad Empresarial',
    description: 'Servicios de contabilidad precisos y confiables para mantener sus finanzas organizadas y su negocio funcionando sin problemas.',
    icon: '📚',
    benefits: [
      'Registros financieros precisos y actualizados',
      'Informes financieros mensuales',
      'Reconciliación bancaria y de tarjetas de crédito',
      'Seguimiento de cuentas por pagar y cobrar',
      'Preparación para impuestos durante todo el año'
    ],
    process: [
      { step: 'Evaluación', description: 'Evaluación completa de sus necesidades de contabilidad' },
      { step: 'Configuración', description: 'Configuración de su sistema de contabilidad' },
      { step: 'Procesamiento', description: 'Procesamiento mensual de transacciones' },
      { step: 'Informes', description: 'Generación de informes financieros mensuales' },
      { step: 'Revisión', description: 'Reuniones de revisión y planificación' }
    ],
    faqs: [
      { question: '¿Con qué frecuencia actualizan los libros?', answer: 'Actualizamos los libros mensualmente, con opciones semanales disponibles para negocios con alto volumen de transacciones.' },
      { question: '¿Qué software de contabilidad utilizan?', answer: 'Trabajamos con QuickBooks, Xero y otros sistemas populares de contabilidad según las necesidades de su negocio.' }
    ]
  },
  'servicios-nomina-tulsa': {
    title: 'Servicios de Nómina',
    description: 'Procesamiento completo de nómina y cumplimiento para empresas de todos los tamaños en Tulsa.',
    icon: '💰',
    benefits: [
      'Procesamiento de nómina preciso y puntual',
      'Cálculo y depósito de impuestos de nómina',
      'Preparación de formularios W-2 y 1099',
      'Cumplimiento con regulaciones estatales y federales',
      'Portal de empleados para acceso a recibos de pago'
    ],
    process: [
      { step: 'Configuración', description: 'Configuración inicial del sistema de nómina' },
      { step: 'Recopilación', description: 'Recopilación de información de empleados y horas' },
      { step: 'Procesamiento', description: 'Cálculo y procesamiento de nómina' },
      { step: 'Depósitos', description: 'Depósito de impuestos y pago a empleados' },
      { step: 'Informes', description: 'Generación de informes y formularios' }
    ],
    faqs: [
      { question: '¿Con qué frecuencia pueden procesar la nómina?', answer: 'Procesamos nómina semanal, quincenal, bisemanal o mensualmente según las necesidades de su negocio.' },
      { question: '¿Manejan los impuestos de nómina?', answer: 'Sí, calculamos, depositamos y reportamos todos los impuestos de nómina federales y estatales.' }
    ]
  },
  'consultoria-negocios-tulsa': {
    title: 'Consultoría de Negocios',
    description: 'Asesoría estratégica para el crecimiento y éxito de su empresa en Tulsa.',
    icon: '📈',
    benefits: [
      'Planificación estratégica de negocios',
      'Análisis financiero y proyecciones',
      'Optimización de estructura empresarial',
      'Estrategias de crecimiento y expansión',
      'Asesoría en financiamiento y capital'
    ],
    process: [
      { step: 'Diagnóstico', description: 'Evaluación completa de su negocio actual' },
      { step: 'Análisis', description: 'Análisis de fortalezas y áreas de mejora' },
      { step: 'Estrategia', description: 'Desarrollo de plan estratégico' },
      { step: 'Implementación', description: 'Apoyo en la implementación de cambios' },
      { step: 'Seguimiento', description: 'Monitoreo y ajustes continuos' }
    ],
    faqs: [
      { question: '¿Qué tipo de negocios asesoran?', answer: 'Asesoramos negocios de todos los tamaños e industrias, desde emprendedores hasta empresas establecidas.' },
      { question: '¿Ofrecen consultas iniciales gratuitas?', answer: 'Sí, ofrecemos una consulta inicial gratuita para entender sus necesidades y determinar cómo podemos ayudarlo.' }
    ]
  },
  'alivio-fiscal-irs-tulsa': {
    title: 'Alivio Fiscal del IRS',
    description: 'Representación experta ante el IRS y resolución de problemas fiscales con experiencia de ex-gerente del IRS.',
    icon: '🛡️',
    benefits: [
      'Experiencia de ex-gerente del IRS',
      'Negociación de ofertas de compromiso',
      'Planes de pago a plazos',
      'Reducción de multas e intereses',
      'Representación en auditorías'
    ],
    process: [
      { step: 'Consulta', description: 'Evaluación gratuita de su situación fiscal' },
      { step: 'Análisis', description: 'Revisión completa de su historial con el IRS' },
      { step: 'Estrategia', description: 'Desarrollo de plan de resolución' },
      { step: 'Negociación', description: 'Negociación directa con el IRS' },
      { step: 'Resolución', description: 'Implementación y cierre del caso' }
    ],
    faqs: [
      { question: '¿Pueden ayudar si debo impuestos atrasados?', answer: 'Sí, tenemos amplia experiencia negociando con el IRS para reducir montos adeudados y establecer planes de pago manejables.' },
      { question: '¿Qué es una oferta de compromiso?', answer: 'Es un acuerdo con el IRS para pagar menos del total adeudado. Evaluamos si califica y negociamos en su nombre.' }
    ]
  },
  'planificacion-financiera-tulsa': {
    title: 'Planificación Financiera',
    description: 'Estrategias personalizadas para alcanzar sus metas financieras y asegurar su futuro.',
    icon: '🎯',
    benefits: [
      'Planificación de jubilación',
      'Estrategias de ahorro fiscal',
      'Planificación de patrimonio',
      'Gestión de inversiones',
      'Protección de activos'
    ],
    process: [
      { step: 'Evaluación', description: 'Evaluación de su situación financiera actual' },
      { step: 'Metas', description: 'Definición de sus metas financieras' },
      { step: 'Plan', description: 'Desarrollo de plan financiero personalizado' },
      { step: 'Implementación', description: 'Puesta en marcha de estrategias' },
      { step: 'Monitoreo', description: 'Seguimiento y ajustes periódicos' }
    ],
    faqs: [
      { question: '¿Necesito mucho dinero para empezar a planificar?', answer: 'No, trabajamos con clientes en todas las etapas de su vida financiera, desde los que están comenzando hasta los que planifican su jubilación.' },
      { question: '¿Con qué frecuencia revisamos el plan?', answer: 'Recomendamos revisiones anuales como mínimo, o cuando ocurran cambios significativos en su vida.' }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(spanishServices).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = spanishServices[slug];

  if (!service) {
    return { title: 'Servicio No Encontrado' };
  }

  return {
    title: `${service.title} Tulsa | Servicios en Español | Klingeman CPAs`,
    description: service.description,
    alternates: {
      canonical: `/es/${slug}`,
      languages: {
        'en': `/services/${slug}`,
      },
    },
  };
}

export default async function SpanishServicePage({ params }: Props) {
  const { slug } = await params;
  const service = spanishServices[slug];

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Español', url: '/es' },
    { name: service.title, url: `/es/${slug}` },
  ]);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <Link href="/es" className="text-[#6D727A] hover:text-[#C8A46E]">Español</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <Link
          href="/es"
          className="inline-flex items-center gap-2 text-[#C8A46E] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>

        <div className="max-w-4xl">
          <span className="text-5xl mb-4 block">{service.icon}</span>
          <h1 className="text-[clamp(32px,4vw,56px)] leading-[1.0] text-[#0B1E3C] mb-6">
            Servicios Profesionales de {service.title} en Tulsa
          </h1>
          <p className="text-[#6D727A] text-lg leading-relaxed mb-8">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-4">
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
              Comenzar Hoy
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-[7vw] py-12 bg-white">
        <div className="max-w-4xl">
          <span className="section-label">Beneficios</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            Beneficios Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-0.5" />
                <p className="text-[#6D727A]">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0B1E3C] p-6">
            <p className="text-white/90 text-center">
              Con experiencia como ex-gerente del IRS y más de 20 años como CPAs practicantes,
              proporcionamos servicios que protegen sus intereses y maximizan su éxito financiero.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-[7vw] py-12">
        <div className="max-w-4xl">
          <span className="section-label">Proceso</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            Nuestro Proceso
          </h2>
          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div key={index} className="bg-white p-6 border border-[rgba(11,30,60,0.10)] flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C8A46E] flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-2">{step.step}</h3>
                  <p className="text-[#6D727A]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-[7vw] py-12 bg-white">
        <div className="max-w-4xl">
          <span className="section-label">Contacto</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            Información de Contacto
          </h2>
          <div className="bg-[#F4F1EC] p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#C8A46E]" />
                <div>
                  <p className="text-sm text-[#6D727A]">Teléfono</p>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#0B1E3C] hover:text-[#C8A46E]">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#C8A46E]" />
                <div>
                  <p className="text-sm text-[#6D727A]">Email</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#0B1E3C] hover:text-[#C8A46E]">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#6D727A]">Dirección</p>
                  <p className="text-[#0B1E3C]">
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-[#6D727A]">Horario</p>
                  <p className="text-[#0B1E3C]">Lunes - Viernes: {BUSINESS_INFO.hours.weekdays}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-[7vw] py-12">
        <div className="max-w-4xl">
          <span className="section-label">FAQs</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 border border-[rgba(11,30,60,0.10)]">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-3">{faq.question}</h3>
                <p className="text-[#6D727A]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(24px,3vw,40px)] leading-[1.1] text-white mb-6">
            ¿Listo para comenzar con {service.title.toLowerCase()}?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Contacte a nuestros CPAs experimentados hoy para una consulta gratuita.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Llamar {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-[#0B1E3C]"
            >
              Programar Consulta
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Ex-Gerente del IRS • Más de 20 años de experiencia • Sirviendo a toda el área de Tulsa
          </p>
        </div>
      </section>
    </div>
  );
}

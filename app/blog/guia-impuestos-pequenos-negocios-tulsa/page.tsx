import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/components/SEO';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Guía de impuestos para pequeños negocios en Tulsa',
  description: 'Guía completa en español para empresarios de Tulsa sobre planificación fiscal, deducciones comerciales y cumplimiento tributario. Expertos CPA con experiencia del IRS.',
  canonical: '/blog/guia-impuestos-pequenos-negocios-tulsa'
});

export default function GuiaImpuestosNegociosPost() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Guía de impuestos para pequeños negocios en Tulsa', url: '/blog/guia-impuestos-pequenos-negocios-tulsa' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="text-blue-700 hover:underline">
                ← Volver al Blog
              </Link>
            </div>

            <header className="mb-12">
              <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=400&fit=crop"
                  alt="Empresario trabajando en impuestos"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
                      Español
                    </span>
                    <span>12 de agosto, 2025</span>
                    <span>7 min de lectura</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Guía de impuestos para pequeños negocios en Tulsa
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Una guía completa en español para empresarios de Tulsa sobre planificación fiscal, 
                deducciones comerciales y cumplimiento tributario. Aprenda cómo maximizar sus ahorros 
                y mantener su negocio en cumplimiento con las leyes fiscales.
              </p>
            </header>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">
                    Servicios en Español Disponibles
                  </h3>
                  <p className="text-green-700">
                    En Klingeman CPAs, ofrecemos servicios completos de contabilidad en español 
                    para la comunidad hispana de Tulsa. Nuestro equipo bilingüe entiende las 
                    necesidades únicas de los empresarios latinos.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>¿Por qué es importante la planificación fiscal para pequeños negocios?</h2>
              
              <p>
                Los pequeños negocios en Tulsa enfrentan desafíos únicos cuando se trata de impuestos. 
                Una planificación fiscal adecuada no solo garantiza el cumplimiento de las leyes, 
                sino que también puede ahorrarle miles de dólares en impuestos cada año.
              </p>

              <h3>Beneficios de una buena planificación fiscal:</h3>
              <ul>
                <li>Reducción significativa de la carga tributaria</li>
                <li>Evitar multas y sanciones costosas</li>
                <li>Mejor flujo de efectivo durante todo el año</li>
                <li>Más tiempo para enfocarse en hacer crecer su negocio</li>
                <li>Protección en caso de auditorías del IRS</li>
              </ul>

              <h2>Estructura de su negocio: Implicaciones fiscales</h2>

              <p>
                La forma legal de su negocio afecta significativamente sus obligaciones fiscales. 
                Aquí explicamos las opciones más comunes para empresarios latinos en Tulsa:
              </p>

              <h3>Empresa Individual (Sole Proprietorship)</h3>
              <ul>
                <li><strong>Ventajas:</strong> Fácil de establecer, control total del negocio</li>
                <li><strong>Desventajas:</strong> Responsabilidad personal ilimitada, impuestos de autoempleo altos</li>
                <li><strong>Fiscalmente:</strong> Los ingresos se reportan en su declaración personal (Formulario 1040, Anexo C)</li>
              </ul>

              <h3>Compañía de Responsabilidad Limitada (LLC)</h3>
              <ul>
                <li><strong>Ventajas:</strong> Protección de responsabilidad, flexibilidad fiscal</li>
                <li><strong>Desventajas:</strong> Más papeleo que empresa individual</li>
                <li><strong>Fiscalmente:</strong> Puede elegir ser tratada como empresa individual, sociedad o corporación</li>
              </ul>

              <h3>Corporación S (S-Corp)</h3>
              <ul>
                <li><strong>Ventajas:</strong> Ahorros en impuestos de autoempleo</li>
                <li><strong>Desventajas:</strong> Restricciones en número y tipo de accionistas</li>
                <li><strong>Fiscalmente:</strong> Evita la doble tributación, pasa ingresos/pérdidas a accionistas</li>
              </ul>

              <h2>Deducciones fiscales clave para pequeños negocios</h2>

              <h3>Gastos de oficina en casa</h3>
              <p>
                Si utiliza parte de su hogar exclusivamente para negocios, puede deducir estos gastos:
              </p>
              <ul>
                <li>Método simplificado: $5 por pie cuadrado (hasta $1,500)</li>
                <li>Método real: Porcentaje de gastos de la casa basado en área utilizada</li>
                <li>Servicios públicos, seguro, reparaciones proporcionales</li>
              </ul>

              <h3>Gastos de vehículo</h3>
              <p>
                Puede deducir gastos de vehículo usando uno de estos métodos:
              </p>
              <ul>
                <li><strong>Método de millaje estándar:</strong> $0.67 por milla comercial (2024)</li>
                <li><strong>Método de gastos reales:</strong> Gasolina, mantenimiento, seguro, depreciación</li>
                <li>Mantenga registros detallados de todas las millas comerciales</li>
              </ul>

              <h3>Equipo y suministros de negocio</h3>
              <ul>
                <li>Computadoras, software, mobiliario de oficina</li>
                <li>Herramientas y equipo específico de la industria</li>
                <li>Suministros de oficina y materiales</li>
                <li>Deducción de la Sección 179 para equipos costosos</li>
              </ul>

              <h3>Gastos de marketing y publicidad</h3>
              <ul>
                <li>Diseño y mantenimiento de sitio web</li>
                <li>Tarjetas de presentación y materiales impresos</li>
                <li>Publicidad en redes sociales</li>
                <li>Patrocinio de eventos comunitarios</li>
              </ul>

              <h2>Obligaciones fiscales específicas en Oklahoma</h2>

              <h3>Impuestos estatales de Oklahoma</h3>
              <ul>
                <li><strong>Impuesto sobre la renta:</strong> Tasas de 0.25% a 5%</li>
                <li><strong>Impuesto sobre ventas:</strong> 4.5% estatal + impuestos locales</li>
                <li><strong>Registro requerido:</strong> Si vende productos o servicios gravables</li>
              </ul>

              <h3>Requisitos de la ciudad de Tulsa</h3>
              <ul>
                <li><strong>Licencia comercial:</strong> Requerida para la mayoría de negocios</li>
                <li><strong>Impuesto ocupacional:</strong> Basado en el tipo de negocio y ingresos</li>
                <li><strong>Permisos especiales:</strong> Según el tipo de negocio</li>
              </ul>

              <div className="bg-blue-50 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Calendario fiscal para pequeños negocios
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Fechas límite importantes:</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li><strong>15 de enero:</strong> Pago estimado del 4to trimestre</li>
                      <li><strong>31 de enero:</strong> Formularios W-2 y 1099</li>
                      <li><strong>15 de marzo:</strong> Declaraciones de S-Corp y sociedades</li>
                      <li><strong>15 de abril:</strong> Declaraciones individuales y 1er pago estimado</li>
                      <li><strong>15 de junio:</strong> 2do pago estimado</li>
                      <li><strong>15 de septiembre:</strong> 3er pago estimado</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tareas mensuales:</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>Conciliar cuentas bancarias</li>
                      <li>Organizar recibos y facturas</li>
                      <li>Actualizar registros de nómina</li>
                      <li>Revisar estados financieros</li>
                      <li>Hacer depósitos de impuestos sobre nómina</li>
                      <li>Declarar impuestos sobre ventas (si aplica)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Estrategias de planificación fiscal</h2>

              <h3>Timing de ingresos y gastos</h3>
              <ul>
                <li><strong>Acelerar gastos:</strong> Compre equipo necesario antes del fin de año</li>
                <li><strong>Diferir ingresos:</strong> Facture en enero para diferir ingresos al siguiente año</li>
                <li><strong>Bonos a empleados:</strong> Páguelos antes del 31 de diciembre</li>
              </ul>

              <h3>Contribuciones para la jubilación</h3>
              <ul>
                <li><strong>SEP-IRA:</strong> Contribuya hasta 25% de ingresos netos</li>
                <li><strong>Solo 401(k):</strong> Límites más altos para dueños de negocios</li>
                <li><strong>SIMPLE IRA:</strong> Opción para negocios con empleados</li>
              </ul>

              <h3>Planificación familiar</h3>
              <ul>
                <li>Emplear a miembros de la familia puede reducir impuestos</li>
                <li>Establecer cuentas de ahorro para educación (529)</li>
                <li>Considerar seguros de vida para protección fiscal</li>
              </ul>

              <h2>Errores comunes que debe evitar</h2>

              <h3>Errores de documentación</h3>
              <ul>
                <li>Mezclar gastos personales y comerciales</li>
                <li>No mantener recibos adecuados</li>
                <li>Registros de millaje incompletos</li>
                <li>No documentar la justificación comercial de gastos</li>
              </ul>

              <h3>Errores de cumplimiento</h3>
              <ul>
                <li>No hacer pagos de impuestos estimados</li>
                <li>Clasificar incorrectamente empleados vs. contratistas</li>
                <li>No reportar ingresos en efectivo</li>
                <li>Perder fechas límite de declaraciones</li>
              </ul>

              <h2>Cuándo buscar ayuda profesional</h2>

              <p>
                Considere contratar un CPA cuando:
              </p>

              <ul>
                <li>Sus ingresos anuales excedan $50,000</li>
                <li>Tenga empleados o contratistas</li>
                <li>Esté considerando cambiar la estructura de su negocio</li>
                <li>Enfrente una auditoría del IRS</li>
                <li>Quiera implementar estrategias fiscales avanzadas</li>
                <li>No tenga tiempo para manejar los libros adecuadamente</li>
              </ul>

              <h3>Beneficios de trabajar con CPAs bilingües</h3>
              <ul>
                <li>Comunicación clara en su idioma nativo</li>
                <li>Comprensión de las necesidades de la comunidad latina</li>
                <li>Experiencia con situaciones fiscales únicas de inmigrantes</li>
                <li>Asistencia con documentación en español</li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-orange-800 mb-2">
                      Atención especial para nuevos inmigrantes
                    </h3>
                    <p className="text-orange-700">
                      Si es nuevo en Estados Unidos, hay consideraciones fiscales especiales. 
                      Los no residentes y residentes nuevos tienen diferentes obligaciones fiscales. 
                      Es crucial obtener asesoramiento profesional para asegurar cumplimiento adecuado 
                      desde el primer día.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Recursos adicionales</h2>

              <h3>Recursos gubernamentales</h3>
              <ul>
                <li><strong>IRS.gov:</strong> Información oficial en español sobre impuestos</li>
                <li><strong>SBA.gov:</strong> Recursos para pequeños negocios</li>
                <li><strong>Oklahoma Tax Commission:</strong> Información sobre impuestos estatales</li>
                <li><strong>Ciudad de Tulsa:</strong> Requisitos de licencias locales</li>
              </ul>

              <h3>Organizaciones de apoyo</h3>
              <ul>
                <li>Cámara de Comercio Hispana de Tulsa</li>
                <li>SCORE Tulsa (mentoría gratuita para negocios)</li>
                <li>Small Business Development Center</li>
                <li>Centros comunitarios con servicios en español</li>
              </ul>

              <h2>Pasos siguientes para su negocio</h2>

              <ol>
                <li><strong>Evalúe su estructura actual</strong> y determine si es la más eficiente fiscalmente</li>
                <li><strong>Implemente sistemas de registro</strong> para documentar todos los gastos comerciales</li>
                <li><strong>Establezca una cuenta bancaria separada</strong> para su negocio</li>
                <li><strong>Programe pagos de impuestos estimados</strong> si es necesario</li>
                <li><strong>Consulte con un CPA bilingüe</strong> para desarrollar una estrategia fiscal personalizada</li>
                <li><strong>Manténgase actualizado</strong> sobre cambios en las leyes fiscales</li>
              </ol>

              <div className="bg-green-50 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Apoyo en español en Klingeman CPAs
                </h3>
                <p className="text-gray-700 mb-4">
                  Entendemos que manejar impuestos en un segundo idioma puede ser desafiante. 
                  Nuestro equipo ofrece servicios completamente en español para:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="text-gray-700 space-y-1">
                      <li>✓ Preparación de declaraciones de impuestos</li>
                      <li>✓ Planificación fiscal estratégica</li>
                      <li>✓ Servicios de nómina</li>
                      <li>✓ Formación de empresas</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-gray-700 space-y-1">
                      <li>✓ Representación ante el IRS</li>
                      <li>✓ Consultas de cumplimiento</li>
                      <li>✓ Estados financieros</li>
                      <li>✓ Planificación para la jubilación</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Conclusión</h2>

              <p>
                La planificación fiscal efectiva es esencial para el éxito de cualquier pequeño negocio 
                en Tulsa. Con la orientación adecuada y una comprensión clara de sus obligaciones, 
                puede minimizar su carga tributaria mientras mantiene el cumplimiento total.
              </p>

              <p>
                Recuerde que las leyes fiscales cambian regularmente, y lo que funciona para un negocio 
                puede no ser apropiado para otro. La inversión en asesoramiento profesional a menudo 
                se paga por sí misma a través de ahorros fiscales y la tranquilidad de saber que 
                está en cumplimiento total.
              </p>

              <p>
                No espere hasta la temporada de impuestos para comenzar a planificar. Los mejores 
                resultados fiscales vienen de la planificación continua durante todo el año.
              </p>
            </div>

            <div className="mt-12 border-t pt-8">
              <p className="text-sm text-gray-600 mb-4">
                Esta guía fue preparada por el equipo bilingüe de Klingeman CPAs, con décadas de 
                experiencia sirviendo a la comunidad empresarial de Tulsa.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Español</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Pequeños Negocios</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Tulsa</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Planificación Fiscal</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesita ayuda con los impuestos de su negocio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Programe una consulta gratuita con nuestros CPAs experimentados que hablan español.
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
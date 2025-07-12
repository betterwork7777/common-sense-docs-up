import React, { useState } from 'react';  
import './App.css';

const translations = {
  en: {
    header: "Common Sense Document Services",
    tagline: "Powered by AI + Experience",
    intro: "Affordable help for everyday people. We combine smart AI tools with 15+ years of real legal experience to assist you with immigration and court paperwork — without the high cost of an attorney.",
    postPay: "✔️ You only pay after the service is completed. No upfront fees.",
    contactHeader: "Contact Us",
    contactNote: "Have a question or ready to get started? Fill out the form below or reach out directly.",
    phone: "Phone: 425-584-8159",
    email: "Email: commonsensedocs@gmail.com",
    disclaimer: "We are not attorneys and do not provide legal advice. We are a document preparation service assisting with forms based on the information you provide. If you need legal advice, please consult a licensed attorney.",
    contactSuccess: "Your message has been sent. We'll get back to you shortly.",
    send: "Send Message",
    name: "Your Name",
    yourEmail: "Your Email",
    message: "Your Message"
  },
  ko: {
    header: "커먼 센스 문서 서비스",
    tagline: "AI와 경험의 결합",
    intro: "일상 속 실질적인 법률 문서 지원 서비스. AI 도구와 15년 이상의 현장 경험을 바탕으로 이민 및 법원 관련 문서를 저렴하게 도와드립니다.",
    postPay: "✔️ 서비스 완료 후에만 결제하시면 됩니다. 선결제 없음.",
    contactHeader: "문의하기",
    contactNote: "궁금한 점이 있으시거나 시작할 준비가 되셨다면 아래 양식을 작성하거나 직접 연락주세요.",
    phone: "전화: 425-584-8159",
    email: "이메일: commonsensedocs@gmail.com",
    disclaimer: "저희는 변호사가 아니며 법적 조언을 제공하지 않습니다. 고객이 제공한 정보를 바탕으로 문서를 준비해드리는 서비스입니다. 법적 조언이 필요하신 경우, 자격을 갖춘 변호사와 상담하세요.",
    contactSuccess: "메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다.",
    send: "메시지 보내기",
    name: "이름",
    yourEmail: "이메일 주소",
    message: "메시지"
  },
  es: {
    header: "Servicios de Documentos Common Sense",
    tagline: "Impulsado por IA + Experiencia",
    intro: "Ayuda legal accesible para personas comunes. Combinamos herramientas de IA con más de 15 años de experiencia para ayudarte con trámites migratorios y documentos legales sin el alto costo de un abogado.",
    postPay: "✔️ Solo paga después de recibir el servicio. Sin costos por adelantado.",
    contactHeader: "Contáctenos",
    contactNote: "¿Tiene preguntas o quiere empezar? Complete el formulario o contáctenos directamente.",
    phone: "Teléfono: 425-584-8159",
    email: "Correo: commonsensedocs@gmail.com",
    disclaimer: "No somos abogados y no ofrecemos asesoría legal. Preparamos documentos según la información que usted nos proporciona. Si necesita asesoría legal, consulte con un abogado autorizado.",
    contactSuccess: "Su mensaje ha sido enviado. Nos pondremos en contacto pronto.",
    send: "Enviar Mensaje",
    name: "Nombre",
    yourEmail: "Correo Electrónico",
    message: "Mensaje"
  },
  zh: {
    header: "常识文书服务",
    tagline: "由 AI 和经验驱动",
    intro: "为普通人提供负担得起的帮助。我们结合智能 AI 工具和15年以上的真实法律经验，在无需支付高昂律师费的情况下帮助您处理移民和法院文件。",
    postPay: "✔️ 服务完成后才付款。无需预付款。",
    contactHeader: "联系我们",
    contactNote: "有问题或准备好开始了吗？请填写下方表格或直接联系我们。",
    phone: "电话: 425-584-8159",
    email: "电子邮件: commonsensedocs@gmail.com",
    disclaimer: "我们不是律师，不能提供法律建议。我们根据您提供的信息帮助准备文件。如需法律建议，请咨询执业律师。",
    contactSuccess: "您的信息已发送，我们将尽快与您联系。",
    send: "发送消息",
    name: "您的姓名",
    yourEmail: "您的电子邮件",
    message: "您的留言"
  },
  fr: {
    header: "Services de Documents de Bon Sens",
    tagline: "Propulsé par l'IA + l'expérience",
    intro: "Aide abordable pour les gens ordinaires. Nous combinons des outils d'IA intelligents à plus de 15 ans d'expérience juridique réelle pour vous aider dans vos démarches d'immigration et de justice, sans le coût élevé d'un avocat.",
    postPay: "✔️ Vous ne payez qu'après la prestation du service. Aucun frais à l'avance.",
    contactHeader: "Contactez-nous",
    contactNote: "Vous avez une question ou êtes prêt à commencer ? Remplissez le formulaire ci-dessous ou contactez-nous directement.",
    phone: "Téléphone : 425-584-8159",
    email: "E-mail : commonsensedocs@gmail.com",
    disclaimer: "Nous ne sommes pas des avocats et ne donnons pas de conseils juridiques. Nous préparons les documents selon les informations que vous fournissez. Pour des conseils juridiques, veuillez consulter un avocat qualifié.",
    contactSuccess: "Votre message a été envoyé. Nous vous répondrons sous peu.",
    send: "Envoyer le message",
    name: "Votre nom",
    yourEmail: "Votre email",
    message: "Votre message"
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const [sent, setSent] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad')" }}>
      <div className="bg-black bg-opacity-60 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{t.header}</h1>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="text-black rounded p-1">
              <option value="en">English</option>
              <option value="ko">한국어</option>
              <option value="es">Español</option>
              <option value="zh">中文</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <h2 className="text-xl mb-4">{t.tagline}</h2>
          <p className="mb-4">{t.intro}</p>
          <p className="mb-6 text-green-300 font-semibold">{t.postPay}</p>

          <div className="bg-white text-black p-4 rounded mb-6">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="list-disc ml-6">
              <li>Immigration & Citizenship Forms</li>
              <li>Divorce, Child Support, Small Claims</li>
              <li>Name Changes, Affidavits, and More</li>
            </ul>
          </div>

          <div className="bg-white text-black p-4 rounded mb-6">
            <h3 className="text-lg font-semibold mb-2">Example Pricing (Affordable & Transparent)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Citizenship Application (N-400)</strong> – $200 to $250 depending on complexity</li>
              <li><strong>Divorce Papers (No Children)</strong> – $250</li>
              <li><strong>Divorce with Child Support</strong> – $300</li>
              <li><strong>Small Claims Court Filing Assistance</strong> – $50</li>
              <li><strong>Name Change</strong> – $50</li>
              <li><strong>Green Card – Family-Based (I-485)</strong> – $400 + $50 per additional family member</li>
            </ul>
            <p className="mt-2 text-green-600 font-semibold">We offer some of the most affordable document services available — with no upfront payment required.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">{t.contactHeader}</h3>
            <p className="mb-4">{t.contactNote}</p>
            <p className="mb-2">{t.phone}</p>
            <p className="mb-4">{t.email}</p>
            {sent ? (
              <p className="text-green-400">{t.contactSuccess}</p>
            ) : (
              <form action="https://formspree.io/f/xeokbaga" method="POST" onSubmit={() => setSent(true)} className="bg-white text-black p-4 rounded space-y-4">
                <input name="name" placeholder={t.name} required className="w-full p-2 border rounded" />
                <input name="email" type="email" placeholder={t.yourEmail} required className="w-full p-2 border rounded" />
                <textarea name="message" placeholder={t.message} required className="w-full p-2 border rounded h-32"></textarea>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{t.send}</button>
              </form>
            )}
          </div>

          <p className="text-sm mt-6">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Honeycomb perde tam olarak ne işe yarar?",
    a: "Bal peteği şeklinde tasarlanmış hava hücreleri, camla oda arasında hareketsiz bir hava tabakası oluşturur. Bu tabaka ısının ve sesin geçişini yavaşlatır. Kışın ısınma süresini kısaltır, yazın ise soğutma yükünü azaltır. Bunun yanı sıra UV ışınlarını yüzde 90-96 oranında filtreleyerek mobilya ve zemin kaplamalarının solmasını engeller.",
  },
  {
    q: "Tek hücreli ile çift hücreli modelin farkı nedir?",
    a: "Tek hücreli modeller yeterli ışık kontrolü ve temel yalıtım sağlar; fiyat avantajı sunar. Çift hücreli modeller ise iki ayrı hava cebi katmanı içerdiğinden ısı yalıtım değeri (R-değeri) yaklaşık iki katına çıkar. Avrupa iklimi ya da kuzey cephe pencereler için çift hücreli kesinlikle önerilir.",
  },
  {
    q: "Ölçü nasıl alınır, yanlış sipariş verirsem ne olur?",
    a: "WhatsApp hattımızda paylaştığımız ölçüm rehberine göre genişlik ve yüksekliği milimetre hassasiyetle belirlemeniz yeterli. İç montaj ve dış montaj için farklı tolerans kuralları uygulanır; uzman ekibimiz sizi adım adım yönlendirir. Ölçü hatası durumunda üretim başlamadan değişiklik yapabiliriz; baskı döndüğünde ek ücretle yeniden kesim seçeneği de sunulur.",
  },
  {
    q: "Avrupa'ya nasıl gönderim yapılıyor?",
    a: "Tüm Avrupa siparişleri Gebze fabrikamızdan DHL Express veya DPD ağıyla çıkış yapar. Sipariş onayından itibaren 3-5 iş günü üretim, ardından 4-10 iş günü teslimat süresi mevcuttur. Kargo çıkışında otomatik takip numarası e-posta veya WhatsApp ile iletilir. Almanya, Hollanda ve Belçika en sık tercih ettiğimiz ve en hızlı ulaştırdığımız ülkeler arasındadır.",
  },
  {
    q: "Kurulum için ustayla mı çalışmak gerekiyor?",
    a: "Türkiye'de montaj ekibimiz randevu günü evinize gelir; kurulumu 30-90 dakikada tamamlar. Avrupa siparişlerinde ürün demonte gönderilir; kargo içindeki rehber ve QR kodlu video sayesinde birçok müşteri profesyonel yardım almadan monte ediyor. Yalnızca matkap, çekiç ve düz bir tornavida gerekir.",
  },
  {
    q: "Temizlik nasıl yapılır?",
    a: "Günlük toz için hafif hafif sallayıp tüyle geçirmeniz yeterlidir. Daha derin temizlik için ılık suya batırılmış yumuşak bez kullanabilirsiniz. Kimyasal çözücüler ve sert fırça kullanmayın; kumaş dokusunu bozar. Bazı model kumaşlar direkt ıslak silmeye uygundur; ürün kartında bu bilgi belirtilir.",
  },
  {
    q: "Motorlu sistem nasıl çalışıyor, akıllı ev sistemleriyle uyumlu mu?",
    a: "Somfy veya Dooya motorlu modeller WiFi, Zigbee veya Z-Wave protokolleri üzerinden akıllı ev sistemlerine entegre edilir. Apple HomeKit, Google Home ve Amazon Alexa desteği mevcuttur. Programlama özelliğiyle sabah belirli saatte açılan, akşam kapanan otomatik senaryolar oluşturabilirsiniz.",
  },
  {
    q: "Kaç renk seçeneği var, numune temin edebilir miyim?",
    a: "Standart koleksiyonumuzda 120'yi aşkın renk ve doku seçeneği bulunur. WhatsApp hattımıza yazarak fiziksel numune talep edebilirsiniz; Türkiye içindeki adreslere ücretsiz, Avrupa adreslerine sembolik kargo ücretiyle gönderilir. Ekran rengi gerçek kumaştan farklı görünebileceğinden numune alma kuvvetle önerilir.",
  },
  {
    q: "Garantisi var mı, arıza durumunda ne yapılıyor?",
    a: "Tüm ürünler 2 yıl fabrika garantisi kapsamındadır. Mekanizma arızası veya kumaş dikişi sorunu olması halinde yetkili servisimiz yerinde müdahale eder ya da parça gönderir. Garanti dışı hasar ve kullanım hatalarında ücretli tamir imkânı sunulur.",
  },
  {
    q: "Fiyatlar nasıl belirleniyor, toplu sipariş indirimi var mı?",
    a: "Fiyat; kumaş tipi, mekanizma seçimi, hücre derinliği ve toplam ölçüye göre hesaplanır. Tek pencere siparişinden itibaren ölçüye özel üretim yapılır; minimum sipariş yoktur. 5 ünite ve üzeri siparişlerde toplu indirim uygulanır. Otel, ofis ve bayilik talepleri için özel fiyatlandırma WhatsApp hattımızdan görüşülebilir.",
  },
  {
    q: "Bayilik almak mümkün mü?",
    a: "Türkiye ve Avrupa genelinde yeni bayiler almaya devam ediyoruz. Bayilik başvurusu için WhatsApp hattımızdan irtibata geçebilirsiniz. Bayilere özel fiyat, toplu sipariş önceliği ve teknik eğitim desteği sağlanır.",
  },
  {
    q: "Avrupa gümrüğünde sorun çıkar mı?",
    a: "Tüm ürünlerimiz CE uygunluk beyanına sahiptir; AB gümrük mevzuatı kapsamında tekstil olarak sınıflandırılır. Fatura ve çeki listesi doğru düzenlenerek kargo firmalarına iletilir; AB ülkelerinde gümrük sorunu yaşandığına dair bugüne kadar müşteri bildirimi almadık. Birleşik Krallık'a gönderimde ek gümrük formu gerekir; bu konuda bilgilendirme yapılır.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="sss" className="section-py bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Sıkça Sorulan Sorular
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] mb-4">
            Aklınızdaki Her Soru,{" "}
            <span className="text-gradient">Net Yanıtlar</span>
          </h2>
          <p className="text-[#5a6a7e] max-w-xl mx-auto text-base">
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">Düet perde</a> ve{" "}
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">zip perde</a>{" "}
            dahil tüm ürünlerimiz hakkında en sık sorulan soruları derledik.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#e8f3e8] rounded-2xl overflow-hidden bg-[#f8faf8] hover:border-[#83bd81]/50 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#404e5e] text-sm leading-relaxed pr-2">
                  {faq.q}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#eef7ee] flex items-center justify-center mt-0.5">
                  {open === i
                    ? <Minus size={14} className="text-[#83bd81]" />
                    : <Plus size={14} className="text-[#83bd81]" />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-[#e8f3e8] mb-4" />
                  <p className="text-sm text-[#5a6a7e] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-[#eef7ee] to-[#f0f5f0] rounded-2xl p-6 text-center border border-[#83bd81]/20">
          <p className="text-sm text-[#5a6a7e] mb-3">
            Aradığınız cevabı bulamadınız mı? Uzman ekibimiz hemen yanıt verir.
          </p>
          <a
            href="https://wa.me/905403363873"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
          >
            WhatsApp ile Sor
          </a>
        </div>
      </div>
    </section>
  );
}

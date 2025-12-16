import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { LeadFormData } from '../types';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    businessName: '',
    businessType: '',
    employeeCount: '',
    address: '',
    problems: '',
    budget: '',
    expectations: '',
    contactTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form or redirect logic here
    }, 2000);
  };

  if (isSuccess) {
    return (
      <section id="contact-form" className="bg-black py-24 px-4 min-h-[600px] flex items-center justify-center">
        <div className="bg-neutral-900 border border-yellow-500/30 p-12 rounded-3xl text-center max-w-xl shadow-[0_0_50px_rgba(255,215,0,0.1)]">
           <CheckCircle2 className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
           <h2 className="text-3xl font-black uppercase text-white mb-4">Ariza Qabul Qilindi!</h2>
           <p className="text-gray-400 text-lg">Mutaxassislarimiz tez orada siz bilan bog'lanishadi va biznesingiz tahlilini taqdim etishadi.</p>
           <button onClick={() => setIsSuccess(false)} className="mt-8 text-yellow-400 underline font-bold uppercase">Yangi ariza yuborish</button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="bg-black py-24 px-4 relative">
       {/* Decorative subtle light */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-yellow-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto bg-neutral-900 rounded-3xl p-6 md:p-12 border border-neutral-800 shadow-2xl relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">Hamkorlik uchun ariza</h2>
           <p className="text-gray-400">Pastdagi formani to'ldiring va bepul marketing tahliliga ega bo'ling.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">To'liq Ismingiz</label>
            <input 
              required 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all placeholder-neutral-700"
              placeholder="Ism Familiya"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-yellow-500/80 tracking-wider ml-1">Telefon Raqam (Majburiy)</label>
            <input 
              required 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange}
              className="w-full bg-black border border-yellow-500/30 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all placeholder-neutral-700"
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">Biznes Nomi</label>
            <input 
              type="text" 
              name="businessName" 
              value={formData.businessName} 
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none transition-all placeholder-neutral-700"
              placeholder="Kompaniya nomi"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">Biznes Turi</label>
            <select 
              name="businessType" 
              value={formData.businessType} 
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none transition-all"
            >
                <option value="">Tanlang...</option>
                <option value="retail">Savdo (Do'kon)</option>
                <option value="service">Xizmat ko'rsatish</option>
                <option value="production">Ishlab chiqarish</option>
                <option value="education">Ta'lim / Kurslar</option>
                <option value="other">Boshqa</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">Xodimlar Soni</label>
            <input 
              type="text" 
              name="employeeCount" 
              value={formData.employeeCount} 
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none transition-all placeholder-neutral-700"
              placeholder="Masalan: 10-50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">Manzil</label>
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none transition-all placeholder-neutral-700"
              placeholder="Shahar, Tuman"
            />
          </div>

           <div className="space-y-2 md:col-span-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">Marketing Muammolari</label>
            <textarea 
              name="problems" 
              value={formData.problems} 
              onChange={handleChange}
              rows={3}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none transition-all placeholder-neutral-700"
              placeholder="Hozirgi asosiy muammolaringiz nimada?"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">Oylik Marketing Byudjeti</label>
            <select 
              name="budget" 
              value={formData.budget} 
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none transition-all"
            >
                <option value="">Tanlang...</option>
                <option value="low">$500 gacha</option>
                <option value="medium">$500 - $2000</option>
                <option value="high">$2000+</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">Bizdan kutilayotgan natija</label>
            <input 
              type="text" 
              name="expectations" 
              value={formData.expectations} 
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none transition-all placeholder-neutral-700"
              placeholder="Maqsad nima?"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold text-gray-500 tracking-wider ml-1">Bog'lanish uchun qulay vaqt</label>
            <input 
              type="text" 
              name="contactTime" 
              value={formData.contactTime} 
              onChange={handleChange}
              className="w-full bg-black border border-neutral-700 rounded-xl px-5 py-4 text-white focus:border-yellow-400 focus:outline-none transition-all placeholder-neutral-700"
              placeholder="Masalan: 10:00 - 18:00"
            />
          </div>

          <div className="md:col-span-2 mt-6">
            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase tracking-widest py-5 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 shadow-[0_0_30px_rgba(255,215,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span>Yuborilmoqda...</span>
                ) : (
                    <>
                        <span>Bepul Tahlil Olish</span>
                        <Send className="w-5 h-5" />
                    </>
                )}
            </button>
            <p className="text-neutral-500 text-xs text-center mt-4">Ma'lumotlaringiz xavfsizligi kafolatlanadi.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
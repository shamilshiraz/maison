'use client';

import { ChevronDown } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section className="h-[100vh] w-full overflow-hidden" style={{fontFamily:'neue'}}>
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-full">
          <img
            src="/osm.jpeg"
            alt="Maison Madras consultation"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex h-full items-center bg-[#20280F] px-8 py-6 text-white lg:px-16">
          <div className="w-full max-w-[520px]">
            <h2
              className="text-[2rem] leading-tight lg:text-[2.5rem]"
              style={{ fontFamily: 'season' }}
            >
              Book your consultation
            </h2>

            <form className="mt-8 space-y-4">
              {/* Name */}
              <div className="border-b border-b-white/20 pb-2.5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              {/* WhatsApp */}
              <div className="border-b border-b-white/20 pb-2.5">
                <input
                  type="tel"
                  placeholder="Whatsapp number"
                  className="w-full bg-transparent text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="border-b border-b-white/20 pb-2.5">
                <input
                  type="email"
                  placeholder="Mail"
                  className="w-full bg-transparent text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              {/* Date Picker */}
              <div className="border-b border-b-white/20 pb-2.5">
                <input
                  type="date"
                  className="w-full bg-transparent text-white [&::-webkit-calendar-picker-indicator]:invert focus:outline-none"
                />
              </div>

              {/* Style */}
              <div className="border-b border-b-white/20 pb-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-white/90"
                >
                  <span>Choose your style</span>
                  <ChevronDown className="h-5 w-5 text-white/70" />
                </button>
              </div>

              {/* Occasion */}
              <div className="border-b border-b-white/20 pb-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-white/90"
                >
                  <span>Occasion</span>
                  <ChevronDown className="h-5 w-5 text-white/70" />
                </button>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3 pt-0 text-white/90 sm:flex-row sm:items-center sm:gap-8">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded-none border border-white/40 bg-transparent accent-white"
                  />
                  <span>In person</span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded-none border border-white/40 bg-transparent accent-white"
                  />
                  <span>Video consultation</span>
                </label>
              </div>

              {/* Notes */}
              <div className="border-b border-b-white/20 pb-2 pt-0">
                <textarea
                  rows={2}
                  placeholder="Notes*"
                  className="w-full resize-none bg-transparent text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              {/* CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-white px-7 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#E8E4DA]"
                >
                  Book now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
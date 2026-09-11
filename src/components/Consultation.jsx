'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const STYLE_OPTIONS = [
  'Classic tailoring',
  'Contemporary',
  'Black tie',
  'Business formal',
  'Casual bespoke',
];

const OCCASION_OPTIONS = [
  'Wedding',
  'Business',
  'Festive',
  'Black tie event',
  'Everyday',
];

function Dropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative border-b border-white/20 pb-3">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-1 text-left text-sm text-white/90 sm:text-base"
      >
        <span className={value ? 'text-white' : 'text-white/90'}>
          {value || label}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-white/70 transition-transform duration-300 sm:h-5 sm:w-5 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-10 mt-2 max-h-56 overflow-y-auto border border-white/20 bg-[#20280F] text-sm text-white/85 shadow-lg sm:text-base"
        >
          {options.map((option) => (
            <li key={option} role="option" aria-selected={value === option}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2.5 text-left transition-colors duration-200 hover:bg-white/10 ${
                  value === option ? 'text-white' : 'text-white/75'
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ConsultationSection() {
  const [style, setStyle] = useState('');
  const [occasion, setOccasion] = useState('');

  return (
    <section
      className="w-full overflow-hidden"
      style={{ fontFamily: 'neue' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[55vh] min-h-[420px] w-full lg:h-auto lg:min-h-[900px]">
          <img
            src="/osm.jpeg"
            alt="Maison Madras consultation"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex min-h-screen items-center bg-[#20280F] px-5 py-16 text-white sm:px-8 sm:py-20 lg:min-h-[900px] lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto w-full max-w-[640px]">
            <h2
              className="text-[2rem] leading-[1.05] sm:text-[2.25rem] lg:text-[2.5rem]"
              style={{ fontFamily: 'season' }}
            >
              Book your consultation
            </h2>

            <form className="mt-10 space-y-7 sm:mt-12 sm:space-y-8">
              {/* Name */}
              <div className="border-b border-white/20 pb-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent py-1 text-sm text-white outline-none placeholder:text-white/45 sm:text-base"
                />
              </div>

              {/* WhatsApp */}
              <div className="border-b border-white/20 pb-3">
                <input
                  type="tel"
                  placeholder="Whatsapp number"
                  className="w-full bg-transparent py-1 text-sm text-white outline-none placeholder:text-white/45 sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="border-b border-white/20 pb-3">
                <input
                  type="email"
                  placeholder="Mail"
                  className="w-full bg-transparent py-1 text-sm text-white outline-none placeholder:text-white/45 sm:text-base"
                />
              </div>

              {/* Date */}
              <div className="border-b border-white/20 pb-3">
                <input
                  type="date"
                  className="w-full bg-transparent py-1 text-sm text-white outline-none [&::-webkit-calendar-picker-indicator]:invert sm:text-base"
                />
              </div>

              {/* Style */}
              <Dropdown
                label="Choose your style"
                options={STYLE_OPTIONS}
                value={style}
                onChange={setStyle}
              />

              {/* Occasion */}
              <Dropdown
                label="Occasion"
                options={OCCASION_OPTIONS}
                value={occasion}
                onChange={setOccasion}
              />

              {/* Consultation Type */}
              <div className="flex flex-col gap-4 pt-1 text-sm text-white/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3 sm:text-base">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 shrink-0 rounded-none border border-white/40 bg-transparent accent-white"
                  />
                  <span>In person</span>
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 shrink-0 rounded-none border border-white/40 bg-transparent accent-white"
                  />
                  <span>Video consultation</span>
                </label>
              </div>

              {/* Notes */}
              <div className="border-b border-white/20 pb-3">
                <textarea
                  rows={3}
                  placeholder="Notes*"
                  className="w-full resize-none bg-transparent py-1 text-sm leading-relaxed text-white outline-none placeholder:text-white/45 sm:text-base"
                />
              </div>

              {/* CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center bg-white px-7 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-[#E8E4DA] sm:px-8"
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
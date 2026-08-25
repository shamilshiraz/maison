import { useEffect, useRef } from 'react'; 
 
// Local images: expects /public/1.webp ... /public/12.webp 
const IMAGES = Array.from({ length: 12 }, (_, i) => `/${i + 1}.webp`); 
 
// Scroll-driven speed per column. 
const SPEEDS = [0.45, 0.7, 0.45, 0.6]; 
 
// Static vertical stagger per column, in vh (negative = shifted up, 
// cropping the top of that column against the gallery's overflow:hidden 
// edge — this is what creates the jagged, masonry look in the reference: 
// col 1 & 3 sit lower and read as "whole", col 2 is pushed up the most 
// (most cropped), col 4 is pushed up a bit less than col 2. 
const STATIC_OFFSET_VH = [0, -38, 0, -22]; 
 
// Every column is forced to the same height regardless of image aspect 
// ratio, so all four stay perfectly even with each other and there are 
// no gaps at the top/bottom of the gallery as they drift at different 
// speeds/offsets. 
const COLUMN_HEIGHT_VH = 170; 
 
function Column({ images, colRef }) { 
  return ( 
    <div ref={colRef} className="column"> 
      {images.map((src) => ( 
        <div className="card" key={src}> 
          <img loading="lazy" src={src} alt="" /> 
        </div> 
      ))} 
    </div> 
  ); 
} 
 
export default function ParallaxGallery() { 
  const galleryRef = useRef(null); 
  const columnRefs = useRef([]); 
  const current = useRef([0, 0, 0, 0]); 
  const rafId = useRef(null); 
 
  useEffect(() => { 
    function getProgress() { 
      const el = galleryRef.current; 
      if (!el) return 0; 
      const rect = el.getBoundingClientRect(); 
      const vh = window.innerHeight; 
      const total = rect.height + vh; 
      const passed = vh - rect.top; 
      return Math.min(1, Math.max(0, passed / total)); 
    } 
 
    function tick() { 
      const p = getProgress(); 
      const vh = window.innerHeight; 
 
      SPEEDS.forEach((speed, i) => { 
        const staticPx = (STATIC_OFFSET_VH[i] / 100) * vh; 
        const target = (p - 0.5) * vh * speed * 2; 
        current.current[i] += (target - current.current[i]) * 0.09; 
        const node = columnRefs.current[i]; 
        if (node) { 
          const y = current.current[i] + staticPx; 
          node.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`; 
        } 
      }); 
 
      rafId.current = requestAnimationFrame(tick); 
    } 
 
    rafId.current = requestAnimationFrame(tick); 
    return () => cancelAnimationFrame(rafId.current); 
  }, []); 
 
  const columns4 = [0, 1, 2, 3].map((i) => IMAGES.slice(i * 3, i * 3 + 3)); 
 
  return ( 
    <div className="page"> 
      <style>{` 
        .page{ margin:0; background:#000; } 
        .gallery{ 
          position:relative; height:100vh; overflow:hidden; background:#000; 
        } 
        .galleryWrapper{ 
          position:absolute; top:0; left:0; right:0; 
          display:flex; gap:1.2vw; padding:0 1.2vw; 
        } 
        .column{ 
          position:relative; flex:1 1 0; display:flex; flex-direction:column; 
          gap:1.2vw; height:${COLUMN_HEIGHT_VH}vh; will-change:transform; 
        } 
        .card{ 
          position:relative; flex:1; overflow:hidden; background:#111; 
        } 
        .card img{ 
          width:100%; height:100%; object-fit:cover; display:block; 
        } 
        @media (max-width: 720px){ 
          .gallery{ height:180vh; } 
          .column{ height:${COLUMN_HEIGHT_VH + 40}vh; } 
          .galleryWrapper{ gap:2vw; padding:0 2vw; } 
        } 
        @media (prefers-reduced-motion: reduce){ 
          .column{ transform:none !important; } 
        } 
      `}</style> 
 
      <section className="gallery" ref={galleryRef}> 
        <div className="galleryWrapper"> 
          {columns4.map((imgs, i) => ( 
            <Column 
              key={i} 
              images={imgs} 
              colRef={(el) => (columnRefs.current[i] = el)} 
            /> 
          ))} 
        </div> 
      </section> 
 
    </div> 
  ); 
}
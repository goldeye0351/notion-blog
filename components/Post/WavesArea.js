export default function WavesArea() {
  const color = '#414b57'
  return (
        <section className="main-hero-waves-area waves-area w-screen  scale-y-[10] rotate-180  translate-y-[380%]  absolute top-0  left-0 my-3">
            <svg className="waves-svg w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z"></path>
                </defs>
                <g className="parallax">
                    <use href="#gentle-wave" x="48" y="0"></use>
                    <use href="#gentle-wave" x="48" y="3"></use>
                    <use href="#gentle-wave" x="48" y="5"></use>
                    <use href="#gentle-wave" x="48" y="7"></use>
                </g>
            </svg>
            <style jsx global>{`
                .parallax > use {
                  animation: move-forever 30s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
                }
                .parallax > use:nth-child(1) {
                  animation-delay: -2s;
                  animation-duration: 7s;
                  fill: ${color};
                  opacity: 0.1;
                }
                .parallax > use:nth-child(2) {
                  animation-delay: -3s;
                  animation-duration: 10s;
                  fill: ${color};
                  opacity: 0.1;
                }
                .parallax > use:nth-child(3) {
                  animation-delay: -4s;
                  animation-duration: 13s;
                  fill: ${color};
                  opacity: 0.1;
                }
                .parallax > use:nth-child(4) {
                  animation-delay: -5s;
                  animation-duration: 20s;
                  fill: ${color};
                  opacity: 0.1;
                }
                
                @keyframes move-forever {
                  0% {
                    transform: translate3d(-90px, 0, 0);
                  }
                  100% {
                    transform: translate3d(85px, 0, 0);
                  }
                }
            `}
            </style>
        </section>
  )
}

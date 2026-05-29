export default function NavLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
  <defs>
    
    <linearGradient id="stripeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFC107" />
      <stop offset="100%" stop-color="#FFB300" />
    </linearGradient>
  </defs>

 
  <polygon points="30,14 44,22 44,38 30,46 16,38 16,22" 
           fill="#FFF8E7" stroke="#FF8C00" stroke-width="3" stroke-linejoin="round"/>


  <ellipse cx="30" cy="31" rx="8" ry="5.5" fill="#1A1A1A"/>

  <rect x="23.5" y="27.5" width="3.5" height="7" fill="url(#stripeGrad)" rx="1"/>
  <rect x="28.5" y="27" width="3.5" height="8" fill="url(#stripeGrad)" rx="1"/>
  <rect x="33.5" y="27.5" width="3.5" height="7" fill="url(#stripeGrad)" rx="1"/>

  <ellipse cx="26" cy="25" rx="4" ry="2.5" fill="#E0E0E0" opacity="0.9" transform="rotate(-20 26 25)"/>

  <ellipse cx="34" cy="25" rx="4" ry="2.5" fill="#E0E0E0" opacity="0.9" transform="rotate(20 34 25)"/>

  <circle cx="25" cy="30" r="1.2" fill="white"/>
  <circle cx="25.5" cy="30" r="0.6" fill="#1A1A1A"/>

 
  <path d="M 24 27 Q 22 23, 20 22" stroke="#1A1A1A" stroke-width="0.8" fill="none" stroke-linecap="round"/>
  <path d="M 26 27 Q 25 22, 24 21" stroke="#1A1A1A" stroke-width="0.8" fill="none" stroke-linecap="round"/>

  
  <circle cx="20" cy="22" r="0.7" fill="#1A1A1A"/>
  <circle cx="24" cy="21" r="0.7" fill="#1A1A1A"/>
</svg>
  );
}
import kamionet from "..//..//assets/ksunset.png";
import proizvodi from "..//..//assets/prozivodimed/medkolekcija-product.webp";
import pcelinjak from "..//..//assets/pcelinjak.jpg";
import GallerySection from "./Gallery";
import Nav from "../../components/Nav";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <>
    <Helmet>
  <title>Medlem - Saznajte više o nama</title>
   <meta
    name="description"
    content="Saznajte više o nama. Našem medu i našim pčelama i proizvodima."
  />

  <meta
    name="robots"
    content="index,follow"
  />

  <link
    rel="canonical"
    href="https://medlem.rs/onama"
  />

  <meta
    property="og:title"
    content="Medlem - Saznajte više o nama"
  />

  <meta
    property="og:description"
    content="Saznajte vise o Medlemu."
  />

  <meta
    property="og:image"
    content="https://medlem.rs/og-about.webp"
  />
 </Helmet>
    <Nav />
        <section className="w-full bg-cream py-20 px-6 overflow-x-hidden mt-10">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 space-y-6">
          
          <span className="uppercase tracking-[0.25em] text-sm text-brown font-semibold font-bree">
            Porodična tradicija
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-brown leading-tight font-bree">
            Naša priča iza svake tegle
          </h2>

          <p className="text-lg text-brown leading-relaxed font-bree text-justify">
            Mi smo porodični pčelinjak koji veruje da priroda daje ono najbolje samo kada se prema njoj odnosi sa dubokim poštovanjem. Naš dom i baza nalaze se u Gornjoj Trešnjici, tik uz bistru reku Drinu i nadomak samog kanjona reke Trešnjice – u kraju koji je širom zemlje poznat po svojoj netaknutoj, divljoj lepoti i kristalno čistom vazduhu.
Danas sa velikom posvećenošću brinemo o oko 150 pčelinjih društava. Za našu porodicu pčelarstvo nije samo posao ili proizvodnja – to je naš način života i tradicija koju gradimo svakim novim danom. U radu se vodimo jednom jednostavnom, ali zlatnom pčelarskom istinom: najbitnije nam je da su naše pčele zdrave, jer kad pčela ima – imaće i meda.


          </p>

        

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            
            <img
              src={pcelinjak}
              alt="Pčelarstvo"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* soft overlay for warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
    <section className="w-full bg-cream py-20 px-6 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 space-y-6">
          
         

          <p className="text-lg text-brown leading-relaxed font-bree text-justify">

Od naše baze u Podrinju do najlepših pašnjaka Srbije
da bismo našim pčelama obezbedili najkvalitetniji nektar i raznovrsnost lekovitog bilja, bavimo se nomadskim pčelarstvom. Posedujemo specijalizovani pčelarski kamion sa 80 fiksiranih košnica koji nam omogućava da pratimo cvetanje biljaka i selimo pčele na najčistije, medonosne lokacije širom zemlje. Na taj način uspevamo da u našim teglama sakupimo ono najbolje što priroda Srbije u tom trenutku nudi.


          </p>

        
          
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            
            <img
              src={kamionet}
              alt="Pčelarstvo"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* soft overlay for warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
    <section className="w-full bg-cream py-20 px-6 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 space-y-6">
          
          
          <p className="text-lg text-brown leading-relaxed font-bree text-justify">
            

Čist proizvod, bez kompromisa.
U našoj ponudi možete pronaći vrhunski bagremov i livadski med, kao i jedinstvene, zdrave mešavine sa polenom, propolisom i liofilizovanim voćem.

Naš med je potpuno prirodan i ne prolazi nikakve industrijske obrade, grejanja niti filtriranja. On zadržava sva svoja prirodna, hranljiva i lekovita svojstva, tačno onako kako su ga pčele u košnici stvorile.

Ponosno vam donosimo „sladak spoj prirode“ – čist, neiskvaren med pravo sa našeg pčelinjaka na vašu trpezu.
          </p>

        
          
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            
            <img
              src={proizvodi}
              alt="Pčelarstvo"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* soft overlay for warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
     <div className="flex items-center justify-center py-16">
      <div className="flex items-center gap-4 w-full max-w-4xl">
        <div className="h-px flex-1 bg-white/10" />

        <div className="relative">
          <div className="absolute inset-0 bg-amber-500/30 blur-lg" />
          <div className="relative h-2 w-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
        </div>

        <div className="h-px flex-1 bg-white/10" />
      </div>
    </div>

    <GallerySection />

    </>
  )
}
export default About;
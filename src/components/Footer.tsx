import Instagram from "./Ig";
import Youtube from "./Yt";
export default function Footer(){
return (


<footer className="bg-dhoney">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <img src="../src/assets/medleml.svg" className="h-20 me-3" alt="Medlem Logo" />
                  <span className="text-heading text-brownt self-center text-2xl font-semibold font-bree whitespace-nowrap">Medlem</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-bree  text-brownt text-heading">Medlem-Sladak Spoj Prirode!</h2>
                  <div className="text-body font-medium">
                      <p className="mb-4 font-bree text-brownt">aSDAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                        </div>  
              </div>
             
          </div>
      </div>
      <hr className="my-6 border-default border-honey sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body font-bree text-brownt sm:text-center">© 2026 <a href="/" className="hover:underline">Medlem</a>. Sva prava zadržana.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Instagram />
            <Youtube />
          </div>
      </div>
    </div>
</footer>

)
}
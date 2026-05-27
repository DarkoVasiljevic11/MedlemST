export default function Hero(){
    return(
  
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover scale-100"
      >
        <source src="../src/assets/medlemst1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center ">
        <h1 className="text-4xl text-brownt text-center font-bree font-style:italic">
          <span className="text-honey">Sladak</span> spoj prirode! 
        </h1>
      </div>
    </div>
  );

}